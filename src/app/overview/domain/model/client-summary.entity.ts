/**
 * @summary ClientSummary entity — overview domain layer.
 * Representa un cliente resumido para la tabla de clientes recientes.
 */
import { BaseEntity } from '../../../shared/domain/model/base-entity';

export class ClientSummary extends BaseEntity {
    initials: string = '';
    name: string = '';
    phone: string = '';
    usualService: string = '';
    lastAppointment: string = '';
    status: 'confirmed' | 'pending' | 'cancelled' = 'pending';
}