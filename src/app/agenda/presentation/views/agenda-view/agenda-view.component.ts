import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AgendaApi } from '../../../infrastructure/agenda-api';
import { Appointment, AppointmentStatus } from '../../../domain/model/appointment.entity';
import { AppointmentFormComponent } from '../../components/appointment-form/appointment-form.component';

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
    MatDialogModule
  ],
  templateUrl: './agenda-view.component.html',
  styleUrls: ['./agenda-view.component.scss']
})
export class AgendaViewComponent implements OnInit {
  private agendaApi = inject(AgendaApi);
  private dialog = inject(MatDialog);


  viewMode = signal<CalendarViewMode>('weekly');
  selectedDate = signal<Date>(new Date());
  searchQuery = signal<string>('');
  statusFilter = signal<AppointmentStatus | 'all'>('all');
  
  appointments = signal<Appointment[]>([]);
  
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
    
    if (this.viewMode() === 'daily') {
        return curr.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    const first = curr.getDate() - curr.getDay() + (curr.getDay() === 0 ? -6 : 1);
    const last = first + 6;

    const firstDay = new Date(this.selectedDate());
    firstDay.setDate(first);
    const lastDay = new Date(this.selectedDate());
    lastDay.setDate(last);

    if (firstDay.getMonth() === lastDay.getMonth()) {
        return `${firstDay.getDate()} - ${lastDay.getDate()} de ${firstDay.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`;
    }
    return `${firstDay.getDate()} ${firstDay.toLocaleDateString('es-ES', { month: 'short' })} - ${lastDay.getDate()} ${lastDay.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}`;
  });


  daysInWeek = computed(() => {
    const curr = new Date(this.selectedDate());
    const first = curr.getDate() - curr.getDay() + (curr.getDay() === 0 ? -6 : 1);
    
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(this.selectedDate());
      d.setDate(first + i);
      
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const dayNum = String(d.getDate()).padStart(2, '0');
      const localDate = `${year}-${month}-${dayNum}`;

      return {
        name: this.weekDays[i],
        number: d.getDate(),
        fullDate: localDate,
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

  private formatLocalDate(d: Date): string {
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

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.agendaApi.getAllAppointments().subscribe(data => {
      this.appointments.set(data);
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
      console.log('Resultado del diálogo:', result);
      if (result) {
        const d = result.date;
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const dayNum = String(d.getDate()).padStart(2, '0');
        const localDate = `${year}-${month}-${dayNum}`;

        const newAppointment: Partial<Appointment> = {
          id: Date.now() as any, // json-server will handle it, but using Date.now() ensures uniqueness
          date: localDate,
          time: result.time,
          clientName: result.client,
          service: result.service,
          category: 'Veterinaria',
          status: result.status,
          note: result.notes
        };


        this.agendaApi.createAppointment(newAppointment).subscribe({
          next: () => {
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
}
