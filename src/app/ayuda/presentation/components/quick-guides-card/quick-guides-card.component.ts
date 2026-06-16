import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

import { HelpGuide } from '../../../domain/model/help-guide.entity';

@Component({
    selector: 'app-quick-guides-card',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        TranslatePipe
    ],
    templateUrl: './quick-guides-card.component.html',
    styleUrl: './quick-guides-card.component.css'
})
export class QuickGuidesCardComponent {
    @Input({ required: true }) guides: HelpGuide[] = [];

    @Output() openGuide = new EventEmitter<HelpGuide>();

    onOpenGuide(guide: HelpGuide): void {
        this.openGuide.emit(guide);
    }
}