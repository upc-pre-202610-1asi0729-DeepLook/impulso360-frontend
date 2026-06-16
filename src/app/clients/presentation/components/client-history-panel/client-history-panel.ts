import { Component, Input, inject, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Client } from '../../../domain/model/client.entity';
import { MatIcon } from "@angular/material/icon";
import { AgendaApi } from '../../../../agenda/infrastructure/agenda-api';
import { AuthStore } from '../../../../auth/application/auth-store';

interface HistoryItem {
  service: string;
  date: string;
  time: string;
  status: string;
}

@Component({
    selector: 'app-client-history-panel',
    standalone: true,
    imports: [CommonModule, TranslateModule, MatIcon],
    templateUrl: './client-history-panel.html',
    styleUrl: './client-history-panel.scss'
})
export class ClientHistoryPanelComponent implements OnChanges {
    @Input() client: Client | null = null;

    combinedHistory: HistoryItem[] = [];

    private agendaApi = inject(AgendaApi);
    private authStore = inject(AuthStore);

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['client']) {
            this.loadHistory();
        }
    }

    private loadHistory(): void {
        const client = this.client;
        if (!client) {
            this.combinedHistory = [];
            return;
        }

        const localHistory: HistoryItem[] = (client.history ?? []).map(h => ({
            service: h.service,
            date: h.date,
            time: h.time,
            status: h.status
        }));

        const businessId = this.authStore.currentUser()?.businessId;
        if (!businessId) {
            this.combinedHistory = localHistory;
            return;
        }

        this.agendaApi.getAllAppointments(businessId).subscribe(appointments => {
            const key = (item: HistoryItem) => `${item.date}|${item.time}|${item.service}`;
            const localKeys = new Set(localHistory.map(key));
            const fromAppointments: HistoryItem[] = appointments
                .filter(a => a.clientEmail === client.email && !localKeys.has(key(a)))
                .map(a => ({ service: a.service, date: a.date, time: a.time, status: a.status }));

            this.combinedHistory = [...localHistory, ...fromAppointments].sort((a, b) =>
                b.date.localeCompare(a.date) || b.time.localeCompare(a.time)
            );
        });
    }

    exportHistory(): void {
        window.print();
    }
}