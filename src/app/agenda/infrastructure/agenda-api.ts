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


