import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Client } from '../../../domain/model/client.entity';
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'app-client-history-panel',
    standalone: true,
    imports: [CommonModule, TranslateModule, MatIcon],
    templateUrl: './client-history-panel.html',
    styleUrl: './client-history-panel.scss'
})
export class ClientHistoryPanelComponent {
    @Input() client: Client | null = null;

    exportHistory(): void {
        window.print();
    }
}