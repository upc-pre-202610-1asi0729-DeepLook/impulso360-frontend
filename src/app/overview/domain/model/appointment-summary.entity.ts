/**
 * @summary AppointmentSummary entity — overview domain layer.
 * Representa una cita resumida para mostrar en el panel general.
 */
import { BaseEntity } from '../../../shared/domain/model/base-entity';

export type AppointmentStatus = 'confirmed' | 'pending' | 'cancelled';

export class AppointmentSummary extends BaseEntity {
    time: string = '';
    clientName: string = '';
    service: string = '';
    category: string = '';
    status: AppointmentStatus = 'pending';
    note?: string;
}