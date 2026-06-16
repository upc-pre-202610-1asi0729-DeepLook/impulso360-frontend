import { AppointmentHistoryItem, ClientStatus } from '../domain/model/client.entity';

export interface ClientResource {
    id: any;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    status: ClientStatus;
    notes: string;
    createdAt: string;
    lastAppointment: string;
    totalAppointments: number;
    attendedAppointments: number;
    history: AppointmentHistoryItem[];
    businessId?: number | string;
}

export interface CreateClientResource {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    status: ClientStatus;
    notes: string;
    createdAt: string;
    lastAppointment: string;
    totalAppointments: number;
    attendedAppointments: number;
    history: AppointmentHistoryItem[];
    businessId?: number | string;
}