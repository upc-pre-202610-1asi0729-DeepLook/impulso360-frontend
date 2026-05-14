import { Client } from '../domain/model/client.entity';
import { ClientResource, CreateClientResource } from './client.resource';

export class ClientAssembler {
    static toEntity(resource: ClientResource): Client {
        return new Client(
            resource.id,
            resource.firstName,
            resource.lastName,
            resource.phone,
            resource.email,
            resource.status,
            resource.notes,
            resource.createdAt,
            resource.lastAppointment,
            resource.totalAppointments,
            resource.attendedAppointments,
            resource.history ?? []
        );
    }

    static toEntities(resources: ClientResource[]): Client[] {
        return resources.map((resource) => this.toEntity(resource));
    }

    static toResource(client: Partial<Client>): CreateClientResource {
        return {
            firstName: client.firstName ?? '',
            lastName: client.lastName ?? '',
            phone: client.phone ?? '',
            email: client.email ?? '',
            status: client.status ?? 'active',
            notes: client.notes ?? '',
            createdAt: client.createdAt ?? new Date().toISOString().slice(0, 10),
            lastAppointment: client.lastAppointment ?? '',
            totalAppointments: client.totalAppointments ?? 0,
            attendedAppointments: client.attendedAppointments ?? 0,
            history: client.history ?? []
        };
    }
}