/**
 * @summary Overview repository contract — overview domain layer.
 */
import { Observable } from 'rxjs';
import { AppointmentSummary } from '../model/appointment-summary.entity';
import { ClientSummary } from '../model/client-summary.entity';
import { OverviewStats } from '../model/overview-stats.entity';

export abstract class OverviewRepository {
    abstract getStats(): Observable<OverviewStats>;
    abstract getTodayAppointments(): Observable<AppointmentSummary[]>;
    abstract getRecentClients(): Observable<ClientSummary[]>;
}