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
    const url = businessId ? `${this.resourceUrl}?businessId=${businessId}` : `${this.resourceUrl}`;
    return this.http.get<any[]>(url).pipe(
      map(list => list.map(a => this.normalizeAppointment(a)))
    );
  }

  getAppointmentsByClientName(clientName: string, businessId?: number | string): Observable<Appointment[]> {
    let url = `${this.resourceUrl}?clientName=${encodeURIComponent(clientName)}`;
    if (businessId) {
      url += `&businessId=${businessId}`;
    }
    return this.http.get<any[]>(url).pipe(
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
