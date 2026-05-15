import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HelpStore } from '../../../application/help.store';
import { TutorialStep } from '../../../domain/model/tutorial-step.entity';
import { HelpGuide } from '../../../domain/model/help-guide.entity';

import { TutorialCardComponent } from '../../components/tutorial-card/tutorial-card.component';
import { FaqCardComponent } from '../../components/faq-card/faq-card.component';
import { QuickGuidesCardComponent } from '../../components/quick-guides-card/quick-guides-card.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-help-view',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        TutorialCardComponent,
        FaqCardComponent,
        QuickGuidesCardComponent,
        TranslatePipe
    ],
    templateUrl: './help-view.component.html',
    styleUrl: './help-view.component.css'
})
export class HelpViewComponent implements OnInit {
    protected readonly store = inject(HelpStore);
    private readonly router = inject(Router);

    protected readonly searchControl = new FormControl('', {
        nonNullable: true
    });

    ngOnInit(): void {
        this.store.loadHelpContent();

        this.searchControl.valueChanges.subscribe((term) => {
            this.store.setSearchTerm(term);
        });
    }

    protected continueTutorialStep(step: TutorialStep): void {
        if (!step.route) {
            return;
        }

        this.router.navigate([step.route]);
    }

    protected openGuide(guide: HelpGuide): void {
        if (!guide.route) {
            return;
        }

        this.router.navigate([guide.route]);
    }
}