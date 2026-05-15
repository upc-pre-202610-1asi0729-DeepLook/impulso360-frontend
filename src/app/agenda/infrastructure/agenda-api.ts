import { Injectable } from '@angular/core';
import { BaseApi } from '@app/shared/infrastructure/base-api';
import { Appointment } from '../domain/model/appointment.entity';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AgendaApi extends BaseApi {
  override get resourcePath(): string { return '/appointments'; }

  private get url(): string {
    return environment.production
        ? `${this.baseUrl}/appointments.json`
        : `${this.baseUrl}/appointments`;
  }

  private toArray<T>(data: any): T[] {
    if (!data) return [];
    if (Array.isArray(data)) return data as T[];
    return Object.values(data) as T[];
  }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<any>(this.url).pipe(
        map(data => this.toArray<Appointment>(data))
    );
  }

  getAppointmentsByClientName(clientName: string): Observable<Appointment[]> {
    return this.getAllAppointments().pipe(
        map(list => list.filter((a: any) => a.clientName === clientName))
    );
  }

  createAppointment(appointment: Partial<Appointment>): Observable<Appointment> {
    const url = environment.production
        ? `${this.baseUrl}/appointments.json`
        : `${this.baseUrl}/appointments`;
    return this.http.post<Appointment>(url, appointment);
  }

  deleteAppointment(id: string | number): Observable<void> {
    const url = environment.production
        ? `${this.baseUrl}/appointments/${id}.json`
        : `${this.baseUrl}/appointments/${id}`;
    return this.http.delete<void>(url);
  }
}