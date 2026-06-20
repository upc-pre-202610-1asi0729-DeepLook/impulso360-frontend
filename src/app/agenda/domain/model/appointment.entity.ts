/**
 * @summary Appointment entity for scheduling.
 */
import { BaseEntity } from '../../../shared/domain/model/base-entity';

export type AppointmentStatus = 'confirmed' | 'pending' | 'cancelled';

export class Appointment extends BaseEntity {
  date: string = '';
  time: string = '';
  clientName: string = '';
  clientEmail: string = '';
  serviceId?: string;
  service: string = '';
  category: string = '';
  status: AppointmentStatus = 'pending';
  note?: string;
  businessId?: number | string;
}

