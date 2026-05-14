/**
 * @summary Notification assembler — shared infrastructure layer.
 * Convierte la respuesta JSON del server en una entidad de dominio y viceversa.
 */
import { Injectable } from '@angular/core';
import { BaseAssembler } from './base-assembler';
import { Notification, NotificationType } from '../domain/model/notification.entity';

interface NotificationResponse {
    id: number;
    type: string;
    title: string;
    description: string;
    time: string;
    read: boolean;
    appointmentId?: number;
    clientId?: number;
}

@Injectable({ providedIn: 'root' })
export class NotificationAssembler extends BaseAssembler<Notification, NotificationResponse> {

    override toEntity(r: NotificationResponse): Notification {
        const entity      = new Notification();
        entity.id          = r.id;
        entity.type        = (r.type as NotificationType) ?? 'info';
        entity.title       = r.title ?? '';
        entity.description = r.description ?? '';
        entity.time        = r.time ?? '';
        entity.read        = r.read ?? false;
        entity.appointmentId = r.appointmentId;
        entity.clientId    = r.clientId;
        return entity;
    }

    override toResponse(entity: Notification): NotificationResponse {
        return {
            id:            entity.id!,
            type:          entity.type,
            title:         entity.title,
            description:   entity.description,
            time:          entity.time,
            read:          entity.read,
            appointmentId: entity.appointmentId,
            clientId:      entity.clientId,
        };
    }
}