export type ClientStatus = 'active' | 'inactive';
export type AppointmentHistoryStatus = 'attended' | 'pending' | 'cancelled';

export interface AppointmentHistoryItem {
    id: any;
    service: string;
    date: string;
    time: string;
    status: AppointmentHistoryStatus;
}

export class Client {
    constructor(
        public id: any,
        public firstName: string,
        public lastName: string,
        public phone: string,
        public email: string,
        public status: ClientStatus,
        public notes: string,
        public createdAt: string,
        public lastAppointment: string,
        public totalAppointments: number,
        public attendedAppointments: number,
        public history: AppointmentHistoryItem[]
    ) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get initials(): string {
        return `${this.firstName.charAt(0)}${this.lastName.charAt(0)}`.toUpperCase();
    }

    get isActive(): boolean {
        return this.status === 'active';
    }
}