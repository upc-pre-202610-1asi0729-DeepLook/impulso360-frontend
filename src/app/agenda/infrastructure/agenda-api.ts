/**
 * @summary API service for agenda-related operations.
 */
import { Injectable } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { Appointment } from '../domain/model/appointment.entity';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgendaApi extends BaseApi {
  override get resourcePath(): string {
    return '/appointments';
  }

  getAllAppointments(businessId?: number | string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.resourceUrl}`).pipe(
      map(list => businessId ? list.filter(a => String(a.businessId) === String(businessId)) : list)
    );
  }

  getAppointmentsByClientName(clientName: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.resourceUrl}?clientName=${clientName}`);
  }

  createAppointment(appointment: Partial<Appointment>): Observable<Appointment> {
    return this.http.post<Appointment>(this.resourceUrl, appointment);
  }

  updateAppointment(id: string | number, appointment: Partial<Appointment>): Observable<Appointment> {
    return this.http.patch<Appointment>(`${this.resourceUrl}/${id}`, appointment);
  }

  deleteAppointment(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.resourceUrl}/${id}`);
  }
}
