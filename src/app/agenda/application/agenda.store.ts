/**
 * @summary Store for managing agenda state using Angular Signals.
 */
import { Injectable, signal } from '@angular/core';
import { Appointment } from '../domain/model/appointment.entity';

@Injectable({
  providedIn: 'root'
})
export class AgendaStore {
  private _appointments = signal<Appointment[]>([]);
  private _isLoading = signal<boolean>(false);
  private _refreshNeeded = signal<boolean>(false);

  appointments = this._appointments.asReadonly();
  isLoading = this._isLoading.asReadonly();
  refreshNeeded = this._refreshNeeded.asReadonly();

  setAppointments(appointments: Appointment[]) {
    this._appointments.set(appointments);
  }

  setLoading(isLoading: boolean) {
    this._isLoading.set(isLoading);
  }

  requestRefresh() {
    this._refreshNeeded.set(true);
  }

  clearRefresh() {
    this._refreshNeeded.set(false);
  }
}
