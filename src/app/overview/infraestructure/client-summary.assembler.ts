/**
 * @summary ClientSummary assembler — overview infrastructure layer.
 */
import { Injectable } from '@angular/core';
import { BaseAssembler } from '../../shared/infrastructure/base-assembler';

import { ClientSummary } from '../domain/model/client-summary.entity';

interface ClientResponse {
    id: number;
    initials: string;
    name: string;
    phone: string;
    usualService: string;
    lastAppointment: string;
    status: string;
}

@Injectable({ providedIn: 'root' })
export class ClientSummaryAssembler extends BaseAssembler<ClientSummary, ClientResponse> {
    override toEntity(r: ClientResponse): ClientSummary {
        const e            = new ClientSummary();
        e.id               = r.id;
        e.initials         = r.initials;
        e.name             = r.name;
        e.phone            = r.phone;
        e.usualService     = r.usualService;
        e.lastAppointment  = r.lastAppointment;
        e.status           = r.status as any;
        return e;
    }

    override toResponse(e: ClientSummary): ClientResponse {
        return {
            id: e.id!, initials: e.initials, name: e.name,
            phone: e.phone, usualService: e.usualService,
            lastAppointment: e.lastAppointment, status: e.status,
        };
    }
}