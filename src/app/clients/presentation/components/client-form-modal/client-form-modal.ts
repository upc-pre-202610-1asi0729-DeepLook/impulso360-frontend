import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

import { Client, ClientStatus } from '../../../domain/model/client.entity';

@Component({
  selector: 'app-client-form-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    MatIconModule
  ],
  templateUrl: './client-form-modal.html',
  styleUrl: './client-form-modal.scss'
})
export class ClientFormModalComponent implements OnChanges {
  @Input() client: Client | null = null;

  @Output() closeModal = new EventEmitter<void>();
  @Output() saveClient = new EventEmitter<Partial<Client>>();

  firstName = '';
  lastName = '';
  phone = '';
  email = '';
  status: ClientStatus = 'active';
  notes = '';

  get isEditMode(): boolean {
    return this.client !== null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['client']) {
      this.loadClientData();
    }
  }

  close(): void {
    this.closeModal.emit();
  }

  save(): void {
    if (!this.firstName.trim() || !this.lastName.trim() || !this.phone.trim()) {
      return;
    }

    this.saveClient.emit({
      firstName: this.firstName.trim(),
      lastName: this.lastName.trim(),
      phone: this.phone.trim(),
      email: this.email.trim(),
      status: this.status,
      notes: this.notes.trim(),
      createdAt: this.client?.createdAt ?? new Date().toISOString().slice(0, 10),
      lastAppointment: this.client?.lastAppointment ?? '',
      totalAppointments: this.client?.totalAppointments ?? 0,
      attendedAppointments: this.client?.attendedAppointments ?? 0,
      history: this.client?.history ?? []
    });
  }

  private loadClientData(): void {
    if (!this.client) {
      this.resetForm();
      return;
    }

    this.firstName = this.client.firstName;
    this.lastName = this.client.lastName;
    this.phone = this.client.phone;
    this.email = this.client.email;
    this.status = this.client.status;
    this.notes = this.client.notes;
  }

  private resetForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.email = '';
    this.status = 'active';
    this.notes = '';
  }
}