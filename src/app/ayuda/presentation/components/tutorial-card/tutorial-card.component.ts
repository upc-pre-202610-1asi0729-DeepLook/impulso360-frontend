import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

import { TutorialStep } from '../../../domain/model/tutorial-step.entity';

@Component({
    selector: 'app-tutorial-card',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        TranslatePipe
    ],
    templateUrl: './tutorial-card.component.html',
    styleUrl: './tutorial-card.component.css'
})
export class TutorialCardComponent {
    @Input({ required: true }) steps: TutorialStep[] = [];

    @Output() continueStep = new EventEmitter<TutorialStep>();

    onContinue(step: TutorialStep): void {
        this.continueStep.emit(step);
    }
}