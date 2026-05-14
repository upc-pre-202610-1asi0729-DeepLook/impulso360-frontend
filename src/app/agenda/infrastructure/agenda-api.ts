<<<<<<< HEAD
/**
 * @summary API service for agenda-related operations.
 */
import { Injectable } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { Appointment } from '../domain/model/appointment.entity';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgendaApi extends BaseApi {
  override get resourcePath(): string {
    return '/appointments';
  }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.resourceUrl);
  }

  getAppointmentsByClientName(clientName: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.resourceUrl}?clientName=${clientName}`);
  }

  createAppointment(appointment: Partial<Appointment>): Observable<Appointment> {
    return this.http.post<Appointment>(this.resourceUrl, appointment);
  }

  deleteAppointment(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.resourceUrl}/${id}`);
  }
}
=======
/**
 * @summary API service for agenda-related operations.
 */
import { Injectable } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { Appointment } from '../domain/model/appointment.entity';


@Injectable({
  providedIn: 'root'
})
export class AgendaApi extends BaseApi {
  override get resourcePath(): string {
    return '/appointments';
  }

  getAllAppointments() {
    return this.http.get<Appointment[]>(this.resourceUrl);
  }

  createAppointment(appointment: Partial<Appointment>) {
    return this.http.post<Appointment>(this.resourceUrl, appointment);
  }
}


>>>>>>> 639c63f2da7f2ec1fdc1cc2b62e7980dc2a456df
