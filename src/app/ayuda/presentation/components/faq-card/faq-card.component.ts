import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslatePipe } from '@ngx-translate/core';

import { HelpFaq } from '../../../domain/model/help-faq.entity';

@Component({
    selector: 'app-faq-card',
    standalone: true,
    imports: [
        CommonModule,
        MatExpansionModule,
        TranslatePipe
    ],
    templateUrl: './faq-card.component.html',
    styleUrl: './faq-card.component.css'
})
export class FaqCardComponent {
    @Input({ required: true }) faqs: HelpFaq[] = [];
}