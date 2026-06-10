import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ClientApiService } from '../../../../clients/infrastructure/client-api.service';
import { Client } from '../../../../clients/domain/model/client.entity';
import { TranslateModule } from '@ngx-translate/core';
import { HttpServiceRepository } from '../../../../servicios/infrastructure/http-service.repository';
import { Service } from '../../../../servicios/domain/model/service.entity';
import { Observable, map, startWith } from 'rxjs';
import { AuthStore } from '../../../../auth/application/auth-store';


@Component({
  selector: 'app-appointment-form',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    TranslateModule
  ],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<AppointmentFormComponent>);
  private clientApi = inject(ClientApiService);
  private serviceApi = inject(HttpServiceRepository);
  private authStore = inject(AuthStore);

  clients: Client[] = [];
  services: Service[] = [];
  filteredClients!: Observable<Client[]>;

  appointmentForm: FormGroup = this.fb.group({
    client: ['', Validators.required],
    service: ['', Validators.required],
    date: [new Date(), Validators.required],
    time: ['09:00', Validators.required],
    duration: ['1 hora', Validators.required],
    status: ['pending', Validators.required],
    notes: [''],
    sendReminder: [true]
  });

  ngOnInit() {
    const businessId = this.authStore.currentUser()?.businessId;

    this.clientApi.getAll(businessId).subscribe(data => {
      this.clients = data;
      this.setupAutocomplete();
    });

    this.serviceApi.getAll(businessId).subscribe(data => {
      this.services = data;
    });
  }

  private setupAutocomplete() {
    this.filteredClients = this.appointmentForm.get('client')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): Client[] {
    const filterValue = value.toLowerCase();
    return this.clients.filter(client => 
      `${client.firstName} ${client.lastName}`.toLowerCase().includes(filterValue) ||
      client.phone.includes(filterValue)
    );
  }


  close() {
    this.dialogRef.close();
  }

  submit() {
    if (this.appointmentForm.valid) {
      this.dialogRef.close(this.appointmentForm.value);
    } else {
      this.appointmentForm.markAllAsTouched();
    }
  }


  setStatus(status: string) {
    this.appointmentForm.patchValue({ status });
  }
}
