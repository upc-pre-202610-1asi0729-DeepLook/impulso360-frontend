import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { BusinessProfileStore } from '@app/business-profile/application/store/business-profile.store';
import { ServiceCategory } from '@app/business-profile/domain/model/service-category.enum';

@Component({
    selector: 'app-business-profile',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatIconModule,
        TranslateModule
    ],
    templateUrl: './business-profile.component.html',
    styleUrl: './business-profile.component.css'
})
export class BusinessProfileComponent implements OnInit, OnDestroy {

    form!: FormGroup;
    loading$!: Observable<boolean>;
    profile$!: Observable<any>;
    categories = Object.values(ServiceCategory);
    selectedCoverImage: string | null = null;

    private destroy$ = new Subject<void>();

    constructor(
        private store: BusinessProfileStore,
        private fb: FormBuilder,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.loading$ = this.store.loading$;
        this.profile$ = this.store.profile$;

        this.form = this.fb.group({
            publicDisplayName: ['', [Validators.required, Validators.minLength(3)]],
            legalName: ['', Validators.required],
            category: ['', Validators.required],
            description: ['', [Validators.required, Validators.maxLength(300)]],
            phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s]{7,15}$/)]],
            street: ['', Validators.required],
            city: ['', Validators.required],
            reference: ['']
        });

        this.store.loadProfile(1);

        this.store.profile$
            .pipe(takeUntil(this.destroy$))
            .subscribe(profile => {
                if (!profile) return;
                this.form.patchValue({
                    publicDisplayName: profile.name.publicDisplayName,
                    legalName: profile.name.legalName,
                    category: profile.category,
                    description: profile.description,
                    phone: profile.phone,
                    street: profile.address.street,
                    city: profile.address.city,
                    reference: profile.address.reference
                });
                
                if (profile.coverImage) {
                    this.selectedCoverImage = profile.coverImage;
                }
            });
    }

    onSave(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const vals = this.form.value;
        this.store.updateProfileData({
            legalName: vals.legalName,
            publicDisplayName: vals.publicDisplayName,
            category: vals.category,
            description: vals.description,
            phone: vals.phone,
            street: vals.street,
            city: vals.city,
            reference: vals.reference,
            coverImage: this.selectedCoverImage || undefined
        });

        this.snackBar.open('Cambios guardados correctamente', 'Cerrar', {
            duration: 3000,
            panelClass: ['snack-success']
        });
    }

    onPreview(): void {
        this.snackBar.open('Vista previa no disponible en modo demo', 'Cerrar', {
            duration: 2500
        });
    }

    onCoverFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.selectedCoverImage = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}