import { Component, inject, signal, computed, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule, MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { AuthStore } from '../../../../auth/application/auth-store';
import { AuthApi } from '../../../../auth/infrastructure/auth-api';
import { AgendaApi } from '../../../../agenda/infrastructure/agenda-api';
import { BusinessProfile, BusinessService } from '../../../domain/models/business-profile';

@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    TranslateModule
  ],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.scss'
})
export class ClientViewComponent implements OnInit {
  private router = inject(Router);
  private authStore = inject(AuthStore);
  private authApi = inject(AuthApi);
  private agendaApi = inject(AgendaApi);

  @ViewChild('datepicker') datepicker!: MatDatepicker<Date>;

  searchQuery = signal('');
  businesses = signal<BusinessProfile[]>([]);
  loading = signal(false);
  selectedBusiness = signal<BusinessProfile | null>(null);

  selectedDate = signal<string>('');
  selectedTime = signal<string>('');
  selectedService = '';
  availableTimes = signal<string[]>([]);
  existingAppointments = signal<any[]>([]);
  bookingLoading = signal(false);
  bookingSuccess = signal(false);
  bookingError = signal('');

  myAppointments = signal<any[]>([]);
  myAppointmentsLoading = signal(false);
  showMyAppointments = signal(false);

  servicesFromServer = signal<any[]>([]);

  filteredBusinesses = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.businesses();
    return this.businesses().filter(b =>
      b.name.publicDisplayName.toLowerCase().includes(q) ||
      b.name.legalName.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q)
    );
  });

  activeServices = computed(() => {
    const business = this.selectedBusiness();
    if (!business) return [];
    const bizId = business.id;
    const serverServices = this.servicesFromServer();
    return serverServices
      .filter(s => (s.status === 'activo' || s.status === 'ACTIVE') && String(s.businessId) === String(bizId))
      .map(s => ({
        id: s.id,
        name: s.name,
        description: s.description || '',
        durationMinutes: s.durationMinutes || 30,
        price: typeof s.price === 'object' ? s.price : { amount: s.price, currency: 'PEN' },
        status: 'ACTIVE',
        category: s.category || '',
        isFeatured: s.isFeatured || false
      }));
  });

  ngOnInit(): void {
    this.showMyAppointments.set(this.router.url.includes('mis-citas'));
    this.loadBusinesses();
    this.loadAllServices();
    this.loadMyAppointments();
  }

  private loadBusinesses(): void {
    this.loading.set(true);
    this.authApi.getUsersByRole('administrador').subscribe({
      next: admins => {
        this.authApi.getAllBusinessProfiles().subscribe({
          next: (profiles: BusinessProfile[]) => {
            const adminUserIds = new Set(admins.map(a => a.id));
            const filtered = profiles.filter(p => p.isPublished && (p.ownerId ? adminUserIds.has(p.ownerId) : true));
            this.businesses.set(filtered.length > 0 ? filtered : profiles.filter(p => p.isPublished));
            this.loading.set(false);
          },
          error: () => this.loading.set(false)
        });
      },
      error: () => this.loading.set(false)
    });
  }

  selectBusiness(b: BusinessProfile): void {
    this.selectedBusiness.set(b);
    this.selectedDate.set('');
    this.selectedTime.set('');
    this.selectedService = '';
    this.availableTimes.set([]);
    this.bookingSuccess.set(false);
    this.bookingError.set('');
  }

  backToList(): void {
    this.selectedBusiness.set(null);
    this.selectedDate.set('');
    this.selectedTime.set('');
    this.selectedService = '';
    this.availableTimes.set([]);
    this.bookingSuccess.set(false);
    this.bookingError.set('');
  }

  openDatepicker(): void {
    this.datepicker.open();
  }

  onDateSelected(dateValue: Date | null): void {
    if (!dateValue) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(dateValue);
    d.setHours(0, 0, 0, 0);
    if (d.getTime() < today.getTime()) {
      this.bookingError.set('Seleccione una fecha a partir del día de hoy.');
      return;
    }
    this.bookingError.set('');
    const year = dateValue.getFullYear();
    const month = String(dateValue.getMonth() + 1).padStart(2, '0');
    const day = String(dateValue.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    this.selectedDate.set(dateStr);
    this.selectedTime.set('');
    this.bookingSuccess.set(false);
    this.loadAvailableTimes(dateStr);
  }

  private loadAvailableTimes(dateStr: string): void {
    const business = this.selectedBusiness();
    if (!business) return;

    this.authApi.getAppointmentsByBusiness(business.id).subscribe(apps => {
      const allTimes = this.generateTimeSlots();
      const bookedTimes = apps
        .filter((a: any) => a.date === dateStr && a.status !== 'cancelled')
        .map((a: any) => a.time);

      const available = allTimes.filter(t => !bookedTimes.includes(t));
      this.availableTimes.set(available);
      this.existingAppointments.set(apps);
    });
  }

  private generateTimeSlots(): string[] {
    const slots: string[] = [];
    for (let h = 8; h <= 18; h++) {
      slots.push(`${String(h).padStart(2, '0')}:00`);
      if (h < 18) {
        slots.push(`${String(h).padStart(2, '0')}:30`);
      }
    }
    return slots;
  }

  selectTime(time: string): void {
    this.selectedTime.set(time);
  }

  onServiceChange(serviceName: string): void {
    this.selectedService = serviceName;
    this.selectedTime.set('');
  }

  bookAppointment(): void {
    const business = this.selectedBusiness();
    const service = this.activeServices().find(s => s.name === this.selectedService) || this.activeServices()[0];
    if (!business || !this.selectedDate() || !this.selectedTime() || !this.selectedService) return;

    this.bookingLoading.set(true);
    this.bookingError.set('');
    const user = this.authStore.currentUser();

    const date = this.selectedDate();
    const time = this.selectedTime();

    const newAppointment: any = {
      date,
      time,
      clientName: user?.name || 'Cliente',
      clientEmail: user?.email || '',
      clientId: user?.id || '',
      service: service.name,
      category: business.category,
      businessId: business.id,
      businessName: business.name.publicDisplayName,
      status: 'pending',
      note: ''
    };

    this.agendaApi.getAllAppointments().subscribe(allApps => {
      const conflict = allApps.some((a: any) =>
        a.clientId === user?.id &&
        a.date === date &&
        a.time === time &&
        a.status !== 'cancelled'
      );
      if (conflict) {
        this.bookingLoading.set(false);
        this.bookingError.set('Ya tiene una cita programada en esta fecha y hora.');
        return;
      }

      this.agendaApi.createAppointment(newAppointment).subscribe({
        next: () => {
          this.authApi.getClientsByEmail(user?.email || '').subscribe({
            next: (existing) => {
              const historyEntry = { service: service.name, date, time, status: 'pending' };
              const clientForThisBusiness = existing?.find((c: any) => String(c.businessId) === String(business.id));
              if (clientForThisBusiness) {
                this.authApi.updateClient(clientForThisBusiness.id, {
                  ...clientForThisBusiness,
                  lastAppointment: date,
                  totalAppointments: (clientForThisBusiness.totalAppointments || 0) + 1,
                  history: [...(clientForThisBusiness.history || []), historyEntry]
                }).subscribe();
              } else {
                const names = (user?.name || 'Cliente').split(' ');
                this.authApi.createClient({
                  firstName: names[0] || user?.name || 'Cliente',
                  lastName: names.length > 1 ? names.slice(1).join(' ') : '',
                  phone: user?.phone || '',
                  email: user?.email || '',
                  status: 'active',
                  notes: '',
                  createdAt: new Date().toISOString().slice(0, 10),
                  lastAppointment: date,
                  totalAppointments: 1,
                  attendedAppointments: 0,
                  history: [historyEntry],
                  businessId: business.id
                }).subscribe();
              }
            }
          });

          this.bookingLoading.set(false);
          this.bookingSuccess.set(true);
          this.selectedTime.set('');
          this.loadAvailableTimes(date);
          this.loadMyAppointments();
        },
        error: () => {
          this.bookingLoading.set(false);
          this.bookingError.set('Error al agendar la cita. Intente de nuevo.');
        }
      });
    });
  }

  getServicesForBusiness(bizId: number | string): any[] {
    return (this.servicesFromServer() || [])
      .filter(s => (s.status === 'activo' || s.status === 'ACTIVE') && String(s.businessId) === String(bizId));
  }

  private loadAllServices(): void {
    this.authApi.getAllServices().subscribe({
      next: (services) => this.servicesFromServer.set(services || []),
      error: () => {}
    });
  }

  private loadMyAppointments(): void {
    this.myAppointmentsLoading.set(true);
    const user = this.authStore.currentUser();
    this.agendaApi.getAllAppointments().subscribe((allApps: any[]) => {
      this.myAppointments.set(allApps.filter(a => a.clientId === user?.id || a.clientEmail === user?.email));
      this.myAppointmentsLoading.set(false);
    });
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      pending: 'status-pending',
      confirmed: 'status-confirmed',
      cancelled: 'status-cancelled',
      attended: 'status-attended'
    };
    return map[status] || 'status-pending';
  }

  toggleMyAppointments(): void {
    if (this.showMyAppointments()) {
      this.router.navigate(['/cliente']);
    } else {
      this.router.navigate(['/cliente', 'mis-citas']);
    }
  }

  get currentUserName(): string {
    return this.authStore.currentUser()?.name || '';
  }
}
