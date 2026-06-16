/**
 * @summary API service for agenda-related operations.
 */
import { Injectable } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { Appointment, AppointmentStatus } from '../domain/model/appointment.entity';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgendaApi extends BaseApi {
  override get resourcePath(): string {
    return '/api/v1/appointments';
  }

  private normalizeStatus(status: string): AppointmentStatus {
    const lower = status?.toLowerCase() || 'pending';
    if (lower === 'confirmed' || lower === 'cancelled') return lower;
    return 'pending';
  }

  private normalizeAppointment(raw: any): Appointment {
    return { ...raw, status: this.normalizeStatus(raw.status) };
  }

  getAllAppointments(businessId?: number | string): Observable<Appointment[]> {
    return this.http.get<any[]>(`${this.resourceUrl}`).pipe(
      map(list => list.map(a => this.normalizeAppointment(a))),
      map(list => businessId ? list.filter(a => String(a.businessId) === String(businessId)) : list)
    );
  }

  getAppointmentsByClientName(clientName: string): Observable<Appointment[]> {
    return this.http.get<any[]>(`${this.resourceUrl}?clientName=${clientName}`).pipe(
      map(list => list.map(a => this.normalizeAppointment(a)))
    );
  }

  createAppointment(appointment: Partial<Appointment>): Observable<Appointment> {
    return this.http.post<any>(this.resourceUrl, appointment).pipe(
      map(a => this.normalizeAppointment(a))
    );
  }

  updateAppointment(id: string | number, appointment: Partial<Appointment>): Observable<Appointment> {
    return this.http.patch<any>(`${this.resourceUrl}/${id}`, appointment).pipe(
      map(a => this.normalizeAppointment(a))
    );
  }

  deleteAppointment(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.resourceUrl}/${id}`);
  }
}
