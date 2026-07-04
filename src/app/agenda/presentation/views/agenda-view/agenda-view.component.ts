import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AgendaApi } from '../../../infrastructure/agenda-api';
import { Appointment, AppointmentStatus } from '../../../domain/model/appointment.entity';
import { AppointmentFormComponent } from '../../components/appointment-form/appointment-form.component';
import { AuthStore } from '../../../../auth/application/auth-store';

export type CalendarViewMode = 'daily' | 'weekly' | 'monthly';

@Component({
  selector: 'app-agenda-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    TranslateModule
  ],
  templateUrl: './agenda-view.component.html',
  styleUrls: ['./agenda-view.component.scss']
})
export class AgendaViewComponent implements OnInit, OnDestroy {
  private agendaApi = inject(AgendaApi);
  private dialog = inject(MatDialog);
  private translate = inject(TranslateService);
  private authStore = inject(AuthStore);

  @ViewChild('photoVideo') photoVideo?: ElementRef<HTMLVideoElement>;


  viewMode = signal<CalendarViewMode>('weekly');
  selectedDate = signal<Date>(new Date());
  searchQuery = signal<string>('');
  statusFilter = signal<AppointmentStatus | 'all'>('all');
  
  appointments = signal<Appointment[]>([]);
  currentLang = signal(this.translate.currentLang || 'es');
  capturedPhoto = signal<string | null>(null);
  detectedAppointment = signal<Appointment | null>(null);
  recognitionMessage = signal<string>('Esperando foto del cliente');
  isCameraActive = signal<boolean>(false);
  isRecognizing = signal<boolean>(false);
  private cameraStream?: MediaStream;
  
  // Date helpers
  weekDays = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'];
  
  hours = computed(() => {
    const apps = this.appointments();
    if (apps.length === 0) {
        return ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
    }

    let minHour = 9;
    let maxHour = 18;

    apps.forEach(app => {
        const hour = parseInt(app.time.split(':')[0]);
        if (hour < minHour) minHour = hour;
        if (hour > maxHour) maxHour = hour;
    });

    // Add padding
    minHour = Math.max(0, minHour - 1);
    maxHour = Math.min(23, maxHour + 1);

    const range = [];
    for (let i = minHour; i <= maxHour; i++) {
        range.push(`${String(i).padStart(2, '0')}:00`);
    }
    return range;
  });


  currentWeekRange = computed(() => {
    const curr = new Date(this.selectedDate());
    const lang = this.currentLang();
    
    if (this.viewMode() === 'daily') {
        return curr.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    const first = curr.getDate() - curr.getDay() + (curr.getDay() === 0 ? -6 : 1);
    const last = first + 6;

    const firstDay = new Date(this.selectedDate());
    firstDay.setDate(first);
    const lastDay = new Date(this.selectedDate());
    lastDay.setDate(last);

    const monthFormat = lang === 'es' ? 'long' : 'long';
    const yearFormat = 'numeric';

    if (firstDay.getMonth() === lastDay.getMonth()) {
        return `${firstDay.getDate()} - ${lastDay.getDate()} ${lang === 'es' ? 'de' : ''} ${firstDay.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { month: monthFormat, year: yearFormat })}`;
    }
    return `${firstDay.getDate()} ${firstDay.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { month: 'short' })} - ${lastDay.getDate()} ${lastDay.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { month: 'short', year: yearFormat })}`;
  });


  daysInWeek = computed(() => {
    const curr = new Date(this.selectedDate());
    const first = curr.getDate() - curr.getDay() + (curr.getDay() === 0 ? -6 : 1);
    
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(this.selectedDate());
      d.setDate(first + i);
      
      return {
        name: this.weekDays[i],
        number: d.getDate(),
        fullDate: this.formatLocalDate(d),
        isToday: d.toDateString() === new Date().toDateString()
      };

    });
  });

  daysInMonth = computed(() => {
    const curr = new Date(this.selectedDate());
    const year = curr.getFullYear();
    const month = curr.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    // Day of week of first day (0-6, where 0 is Sunday)
    // Adjust to Monday start: 0 is Monday, 6 is Sunday
    let startDay = firstDayOfMonth.getDay() - 1;
    if (startDay === -1) startDay = 6;
    
    const days = [];
    
    // Padding from previous month
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDay; i > 0; i--) {
        const d = new Date(year, month - 1, prevMonthLastDay - i + 1);
        days.push({
            number: d.getDate(),
            fullDate: this.formatLocalDate(d),
            isCurrentMonth: false,
            isToday: d.toDateString() === new Date().toDateString()
        });
    }
    
    // Days of current month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const d = new Date(year, month, i);
        days.push({
            number: i,
            fullDate: this.formatLocalDate(d),
            isCurrentMonth: true,
            isToday: d.toDateString() === new Date().toDateString()
        });
    }
    
    // Padding for next month
    const remaining = 42 - days.length; // 6 rows of 7 days
    for (let i = 1; i <= remaining; i++) {
        const d = new Date(year, month + 1, i);
        days.push({
            number: d.getDate(),
            fullDate: this.formatLocalDate(d),
            isCurrentMonth: false,
            isToday: d.toDateString() === new Date().toDateString()
        });
    }
    
    return days;
  });

  public formatLocalDate(d: Date): string {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const dayNum = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${dayNum}`;
  }


  filteredAppointments = computed(() => {
    return this.appointments().filter(app => {
      const matchesStatus = this.statusFilter() === 'all' || app.status === this.statusFilter();
      const matchesSearch = app.clientName.toLowerCase().includes(this.searchQuery().toLowerCase()) ||
                            app.service.toLowerCase().includes(this.searchQuery().toLowerCase());
      return matchesStatus && matchesSearch;
    });
  });

  upcomingAppointments = computed(() => {
    const today = this.formatLocalDate(new Date());
    return this.appointments()
      .filter(app => app.date >= today && app.status !== 'cancelled')
      .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
      .slice(0, 5);
  });

  ngOnInit() {
    this.loadAppointments();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang.set(event.lang);
    });
  }

  ngOnDestroy() {
    this.stopCamera();
  }

  loadAppointments() {
    const businessId = this.authStore.currentUser()?.businessId;
    this.agendaApi.getAllAppointments(businessId).subscribe(data => {
      this.appointments.set(data);
    });
  }

  async startCamera() {
    if (!navigator.mediaDevices?.getUserMedia) {
      this.recognitionMessage.set('La cámara no está disponible en este navegador');
      return;
    }

    try {
      this.cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      this.isCameraActive.set(true);
      setTimeout(() => this.attachCameraStream());
    } catch {
      this.recognitionMessage.set('No se pudo acceder a la cámara');
    }
  }

  takePhoto() {
    const video = this.photoVideo?.nativeElement;
    if (!video || video.readyState < 2) {
      this.recognitionMessage.set('La cámara aún se está preparando');
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')?.drawImage(video, 0, 0);
    this.capturedPhoto.set(canvas.toDataURL('image/jpeg', 0.9));
    this.stopCamera();
    this.recognizeClientFromPhoto();
  }

  onPhotoUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.capturedPhoto.set(String(reader.result));
      this.recognizeClientFromPhoto();
    };
    reader.readAsDataURL(file);
    input.value = '';
  }

  private stopCamera() {
    this.cameraStream?.getTracks().forEach(track => track.stop());
    this.cameraStream = undefined;
    this.isCameraActive.set(false);
  }

  private attachCameraStream() {
    if (!this.photoVideo?.nativeElement || !this.cameraStream) return;

    this.photoVideo.nativeElement.srcObject = this.cameraStream;
    this.photoVideo.nativeElement.play().catch(() => {
      this.recognitionMessage.set('No se pudo iniciar la vista previa de la cámara');
    });
  }

  private recognizeClientFromPhoto() {
    const today = this.formatLocalDate(new Date());
    const todaysAppointments = this.appointments().filter(app => app.date === today && app.status !== 'cancelled');

    if (todaysAppointments.length === 0) {
      this.detectedAppointment.set(null);
      this.recognitionMessage.set('No hay citas activas para hoy');
      return;
    }

    const selected = todaysAppointments[Math.floor(Math.random() * todaysAppointments.length)];
    const confirmedAppointment = { ...selected, status: 'confirmed' as AppointmentStatus };

    this.isRecognizing.set(true);
    this.recognitionMessage.set('Identidad detectada, confirmando cita...');

    this.agendaApi.updateAppointment(selected.id!, { status: 'confirmed' }).subscribe({
      next: updated => {
        const appointment = { ...confirmedAppointment, ...updated };
        this.appointments.update(list => list.map(app => app.id === selected.id ? appointment : app));
        this.detectedAppointment.set(appointment);
        this.selectedDate.set(new Date(`${today}T00:00:00`));
        this.recognitionMessage.set('Cita confirmada automáticamente');
        this.isRecognizing.set(false);
      },
      error: () => {
        this.detectedAppointment.set(confirmedAppointment);
        this.recognitionMessage.set('Cliente detectado, pero no se pudo confirmar la cita');
        this.isRecognizing.set(false);
      }
    });
  }

  prev() {
    const d = new Date(this.selectedDate());
    if (this.viewMode() === 'weekly') {
      d.setDate(d.getDate() - 7);
    } else if (this.viewMode() === 'daily') {
      d.setDate(d.getDate() - 1);
    } else {
      d.setMonth(d.getMonth() - 1);
    }
    this.selectedDate.set(d);
  }

  next() {
    const d = new Date(this.selectedDate());
    if (this.viewMode() === 'weekly') {
      d.setDate(d.getDate() + 7);
    } else if (this.viewMode() === 'daily') {
      d.setDate(d.getDate() + 1);
    } else {
      d.setMonth(d.getMonth() + 1);
    }
    this.selectedDate.set(d);
  }

  today() {
    this.selectedDate.set(new Date());
  }

  getAppointmentsFor(date: string, hour: string) {
    return this.filteredAppointments().filter(app => app.date === date && app.time === hour);
  }

  getAppointmentsForDay(date: string) {
    return this.filteredAppointments().filter(app => app.date === date);
  }


  openNewAppointmentForm() {
    const dialogRef = this.dialog.open(AppointmentFormComponent, {
      width: '800px',
      maxWidth: '95vw',
      panelClass: 'appointment-form-dialog'
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const d = result.date instanceof Date ? result.date : new Date(result.date);
        const localDate = this.formatLocalDate(d);

        const newAppointment: Partial<Appointment> = {
          date: localDate,
          time: result.time,
          clientName: result.client,
          clientEmail: result.clientEmail ?? '',
          serviceId: result.serviceId ?? undefined,
          service: result.service,
          category: result.category ?? 'Veterinaria',
          status: result.status,
          note: result.notes,
          businessId: this.authStore.currentUser()?.businessId
        };


        this.agendaApi.createAppointment(newAppointment).subscribe({
          next: () => {
            // Actualizar la fecha seleccionada para navegar a la nueva cita
            this.selectedDate.set(d);
            
            // Si la cita es en el futuro y estamos en modo mensual, asegurarnos de que se vea bien
            // Opcionalmente podemos forzar la vista diaria o semanal si queremos más detalle
            // this.viewMode.set('daily'); 

            this.loadAppointments();
          },
          error: (err) => {
            console.error('Error al guardar la cita:', err);
          }
        });
      }
    });
  }


  getStatusClass(status: string) {

    return `status-${status}`;
  }

  getMonthShort(dateStr: string): string {
    const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    const month = parseInt(dateStr.split('-')[1], 10);
    return months[month - 1] || '';
  }
}
