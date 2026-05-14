/**
 * @summary Appointment entity for scheduling.
 */
import { BaseEntity } from '../../../shared/domain/model/base-entity';

export class Appointment extends BaseEntity {
  title: string = '';
  startTime: Date = new Date();
  endTime: Date = new Date();
  description?: string;
}
