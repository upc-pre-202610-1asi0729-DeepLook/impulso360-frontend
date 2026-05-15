import { computed, inject, Injectable, signal } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { HelpFaq } from '../domain/model/help-faq.entity';
import { HelpGuide } from '../domain/model/help-guide.entity';
import { TutorialStep } from '../domain/model/tutorial-step.entity';
import { HelpApiService } from '../infrastructure/help-api.service';

@Injectable({
    providedIn: 'root'
})
export class HelpStore {
    private readonly helpApiService = inject(HelpApiService);
    private readonly translate = inject(TranslateService);

    private readonly faqsSignal = signal<HelpFaq[]>([]);
    private readonly guidesSignal = signal<HelpGuide[]>([]);
    private readonly tutorialStepsSignal = signal<TutorialStep[]>([]);
    private readonly searchTermSignal = signal<string>('');
    private readonly loadingSignal = signal<boolean>(false);

    readonly faqs = this.faqsSignal.asReadonly();
    readonly guides = this.guidesSignal.asReadonly();
    readonly tutorialSteps = this.tutorialStepsSignal.asReadonly();
    readonly searchTerm = this.searchTermSignal.asReadonly();
    readonly loading = this.loadingSignal.asReadonly();

    constructor() {
        this.translate.onLangChange.subscribe(() => {
            this.loadHelpContent();
        });
    }

    readonly filteredFaqs = computed(() => {
        const term = this.normalizeText(this.searchTermSignal());

        if (!term) {
            return this.faqsSignal();
        }

        return this.faqsSignal().filter((faq) => {
            const question = this.normalizeText(faq.question);
            const answer = this.normalizeText(faq.answer);

            return question.includes(term) || answer.includes(term);
        });
    });

    readonly filteredGuides = computed(() => {
        const term = this.normalizeText(this.searchTermSignal());

        if (!term) {
            return this.guidesSignal();
        }

        return this.guidesSignal().filter((guide) => {
            const title = this.normalizeText(guide.title);
            const description = this.normalizeText(guide.description);

            return title.includes(term) || description.includes(term);
        });
    });

    loadHelpContent(): void {
        this.loadingSignal.set(true);

        forkJoin({
            faqs: this.helpApiService.getFaqs(),
            guides: this.helpApiService.getGuides(),
            tutorialSteps: this.helpApiService.getTutorialSteps()
        }).subscribe({
            next: ({ faqs, guides, tutorialSteps }) => {
                this.faqsSignal.set(faqs);
                this.guidesSignal.set(guides);
                this.tutorialStepsSignal.set(tutorialSteps);
                this.loadingSignal.set(false);
            },
            error: (error) => {
                console.error('Error loading help content:', error);
                this.loadingSignal.set(false);
            }
        });
    }

    setSearchTerm(term: string): void {
        this.searchTermSignal.set(term);
    }

    private normalizeText(value: string): string {
        return value
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();
    }
}