import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-client-summary-cards',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatIconModule],
  templateUrl: './client-summary-cards.html',
  styleUrl: './client-summary-cards.scss'
})
export class ClientSummaryCardsComponent {
  @Input() totalClients = 0;
  @Input() activeClients = 0;
  @Input() newThisMonth = 0;
}