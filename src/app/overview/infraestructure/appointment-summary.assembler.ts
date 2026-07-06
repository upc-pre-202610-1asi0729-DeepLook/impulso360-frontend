/**
 * @summary AppointmentSummary assembler — overview infrastructure layer.
 */
import { Injectable } from '@angular/core';
import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { AppointmentSummary, AppointmentStatus } from '../domain/model/appointment-summary.entity';

interface AppointmentResponse {
    id: number;
    time: string;
    clientName: string;
    service: string;
    category: string;
    status: string;
    note?: string;
}

@Injectable({ providedIn: 'root' })
export class AppointmentSummaryAssembler extends BaseAssembler<AppointmentSummary, AppointmentResponse> {
    override toEntity(r: AppointmentResponse): AppointmentSummary {
        const e      = new AppointmentSummary();
        e.id         = r.id;
        e.time       = r.time;
        e.clientName = r.clientName;
        e.service    = r.service;
        e.category   = r.category;
        e.status     = (r.status?.toLowerCase() as AppointmentStatus) ?? 'pending';
        e.note       = r.note;
        return e;
    }

    override toResponse(e: AppointmentSummary): AppointmentResponse {
        return {
            id: e.id!, time: e.time, clientName: e.clientName,
            service: e.service, category: e.category,
            status: e.status, note: e.note,
        };
    }
}