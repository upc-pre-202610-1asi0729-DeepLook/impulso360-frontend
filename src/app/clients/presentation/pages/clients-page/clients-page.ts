import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ClientStore } from '../../../application/stores/client.store';
import { Client } from '../../../domain/model/client.entity';
import {ClientSummaryCardsComponent} from "../../components/client-summary-cards/client-summary-cards";
import {ClientHistoryPanelComponent} from "../../components/client-history-panel/client-history-panel";
import {ClientFormModalComponent} from "../../components/client-form-modal/client-form-modal";
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ClientSummaryCardsComponent,
    ClientHistoryPanelComponent,
    ClientFormModalComponent,
    MatIconModule
  ],
  templateUrl: './clients-page.html',
  styleUrl: './clients-page.scss'
})
export class ClientsPageComponent implements OnInit {
  constructor(public readonly clientStore: ClientStore) {}

  ngOnInit(): void {
    this.clientStore.loadClients();
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.clientStore.setSearchTerm(input.value);
  }

  selectClient(client: Client): void {
    this.clientStore.selectClient(client);
  }

  openCreateClientModal(): void {
    this.clientStore.openCreateModal();
  }

  openEditClientModal(client: Client): void {
    this.clientStore.openEditModal(client);
  }

  exportPdf(): void {
    window.print();
  }

  trackByClientId(index: number, client: Client): number {
    return client.id;
  }
}