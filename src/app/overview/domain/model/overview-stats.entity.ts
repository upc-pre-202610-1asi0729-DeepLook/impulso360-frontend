/**
 * @summary OverviewStats entity — overview domain layer.
 * Agrupa los 4 KPIs del panel general.
 */
export class OverviewStats {
    todayAppointments: number = 0;
    todayVsYesterday: number = 0;
    confirmed: number = 0;
    confirmedPercent: number = 0;
    pending: number = 0;
    activeClients: number = 0;
    newClientsThisMonth: number = 0;
}