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
      .filter(s => {
        const status = (s.status || '').toLowerCase();
        return (status === 'active' || status === 'activo' || status === 'ACTIVE') && String(s.businessId) === String(bizId);
      })
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
  }

  private loadBusinesses(): void {
    this.loading.set(true);
    this.authApi.getUsersByRole('administrador').subscribe({
      next: admins => {
        this.authApi.getAllBusinessProfiles().subscribe({
          next: (rawProfiles: any[]) => {
            const profiles: BusinessProfile[] = rawProfiles.map(p => ({
              id: p.id,
              ownerId: p.ownerId != null ? String(p.ownerId) : undefined,
              name: typeof p.name === 'object' ? p.name : { legalName: p.name || '', publicDisplayName: p.name || '' },
              address: typeof p.address === 'object' ? p.address : { street: p.address || '', city: '', reference: '' },
              description: p.description || '',
              phone: p.phone || '',
              category: p.category || '',
              isPublished: p.isPublished ?? true,
              coverImage: p.coverImage || '',
              services: []
            }));
            const adminUserIds = new Set(admins.map(a => String(a.id)));
            const filtered = profiles.filter(p => p.isPublished && (p.ownerId ? adminUserIds.has(p.ownerId) : true));
            this.businesses.set(filtered.length > 0 ? filtered : profiles.filter(p => p.isPublished));
            this.loading.set(false);
            this.loadServicesForAllBusinesses();
            this.loadMyAppointments();
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
      serviceId: service.id ?? null,
      service: service.name,
      category: business.category,
      businessId: business.id,
      status: 'pending',
      note: ''
    };

    this.agendaApi.getAllAppointments(business.id).subscribe(allApps => {
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
          this.authApi.getClientsByEmail(user?.email || '', business.id).subscribe({
            next: (existing) => {
              const historyEntry = { service: service.name, date, time, status: 'pending' };
              const clientForThisBusiness = existing?.find((c: any) => String(c.businessId) === String(business.id));
              if (clientForThisBusiness) {
                this.authApi.updateClient(clientForThisBusiness.id, {
                  firstName: clientForThisBusiness.firstName,
                  lastName: clientForThisBusiness.lastName,
                  phone: clientForThisBusiness.phone || undefined,
                  email: clientForThisBusiness.email,
                  status: clientForThisBusiness.status || 'active',
                  notes: clientForThisBusiness.notes || ''
                }).subscribe();
              } else {
                this.createClientRecord(user, business.id, service, date, time);
              }
            },
            error: () => {
              const historyEntry = { service: service.name, date, time, status: 'pending' };
              this.createClientRecord(user, business.id, service, date, time);
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
      .filter(s => {
        const status = (s.status || '').toLowerCase();
        return (status === 'active' || status === 'activo' || status === 'ACTIVE') && String(s.businessId) === String(bizId);
      });
  }

  private loadServicesForAllBusinesses(): void {
    const allServices: any[] = [];
    const businesses = this.businesses();
    let completed = 0;
    if (businesses.length === 0) return;
    businesses.forEach(biz => {
      this.authApi.getAllServices(biz.id).subscribe({
        next: (services) => {
          allServices.push(...(services || []));
          completed++;
          if (completed === businesses.length) {
            this.servicesFromServer.set(allServices);
          }
        },
        error: () => {
          completed++;
          if (completed === businesses.length) {
            this.servicesFromServer.set(allServices);
          }
        }
      });
    });
  }

  private loadMyAppointments(): void {
    this.myAppointmentsLoading.set(true);
    const user = this.authStore.currentUser();
    const businesses = this.businesses();
    if (businesses.length === 0) {
      this.myAppointments.set([]);
      this.myAppointmentsLoading.set(false);
      return;
    }
    const allAppts: any[] = [];
    let completed = 0;
    businesses.forEach(biz => {
      this.agendaApi.getAllAppointments(biz.id).subscribe((apps: any[]) => {
        allAppts.push(...apps.filter(a => a.clientId === user?.id || a.clientEmail === user?.email));
        completed++;
        if (completed === businesses.length) {
          this.myAppointments.set(allAppts);
          this.myAppointmentsLoading.set(false);
        }
      });
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

  private createClientRecord(user: any, businessId: number | string, service: any, date: string, time: string): void {
    const names = (user?.name || 'Cliente').split(' ');
    this.authApi.createClient({
      firstName: names[0] || user?.name || 'Cliente',
      lastName: names.length > 1 ? names.slice(1).join(' ') : 'Sin apellido',
      phone: user?.phone || undefined,
      email: user?.email || '',
      notes: '',
      businessId: businessId
    }).subscribe({
      error: (err) => console.error('Error creating client record:', err)
    });
  }

  get currentUserName(): string {
    return this.authStore.currentUser()?.name || '';
  }
}
