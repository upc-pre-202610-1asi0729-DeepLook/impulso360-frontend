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
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ClientApiService } from '../../../../clients/infrastructure/client-api.service';
import { Client } from '../../../../clients/domain/model/client.entity';
import { Observable, map, startWith } from 'rxjs';


@Component({
  selector: 'app-appointment-form',
  standalone: true,
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
    MatAutocompleteModule
  ],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<AppointmentFormComponent>);
  private clientApi = inject(ClientApiService);

  clients: Client[] = [];
  filteredClients!: Observable<Client[]>;

  appointmentForm: FormGroup = this.fb.group({
    client: ['', Validators.required],
    service: ['', Validators.required],
    date: [new Date(), Validators.required],
    time: ['09:00', Validators.required],
    duration: ['1 hora', Validators.required],
    status: ['confirmed', Validators.required],
    notes: [''],
    sendReminder: [true]
  });

  ngOnInit() {
    this.clientApi.getAll().subscribe(data => {
      this.clients = data;
      this.setupAutocomplete();
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
    console.log('Intentando enviar formulario...');
    console.log('Válido:', this.appointmentForm.valid);
    console.log('Valores:', this.appointmentForm.value);
    console.log('Errores:', this.appointmentForm.errors);
    
    if (this.appointmentForm.valid) {
      this.dialogRef.close(this.appointmentForm.value);
    } else {
      // Mark all as touched to show errors
      this.appointmentForm.markAllAsTouched();
    }
  }


  setStatus(status: string) {
    this.appointmentForm.patchValue({ status });
  }
}
