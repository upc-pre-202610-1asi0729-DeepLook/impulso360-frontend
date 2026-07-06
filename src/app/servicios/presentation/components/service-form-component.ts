import { Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-service-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    TranslateModule
  ],
  template: `
    <div class="form-container">
      <header class="form-header">
        <div class="header-icon">
          <mat-icon>{{ data ? 'edit' : 'add_circle' }}</mat-icon>
        </div>
        <div class="header-content">
          <h2 class="form-title">{{ (data ? 'SERVICES.ACTIONS.EDIT' : 'SERVICES.ADD') | translate }}</h2>
          <p class="form-subtitle">Completa la información detallada de tu servicio</p>
        </div>
        <button mat-icon-button (click)="onCancel()" class="close-button">
          <mat-icon>close</mat-icon>
        </button>
      </header>

      <mat-dialog-content>
        <form [formGroup]="form" class="service-form">
          <div class="form-section">
            <h3 class="section-title">Información Básica</h3>
            <div class="form-grid">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>{{ 'SERVICES.FIELDS.NAME' | translate }}</mat-label>
                <input matInput formControlName="name" placeholder="Ej. Corte de pelo premium">
                <mat-icon matSuffix>label</mat-icon>
                <mat-error *ngIf="form.get('name')?.hasError('required')">El nombre es obligatorio</mat-error>
                <mat-error *ngIf="form.get('name')?.hasError('minlength')">Mínimo 3 caracteres</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>{{ 'SERVICES.FIELDS.CATEGORY' | translate }}</mat-label>
                <input matInput formControlName="category" placeholder="Ej. Estética, Salud, etc.">
                <mat-icon matSuffix>category</mat-icon>
                <mat-error *ngIf="form.get('category')?.hasError('required')">La categoría es obligatoria</mat-error>
              </mat-form-field>
            </div>
          </div>

          <div class="form-section">
            <h3 class="section-title">Detalles y Precio</h3>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>{{ 'SERVICES.FIELDS.DESCRIPTION' | translate }}</mat-label>
              <textarea matInput formControlName="description" rows="3" placeholder="Describe brevemente de qué trata el servicio..."></textarea>
              <mat-icon matSuffix>description</mat-icon>
              <mat-error *ngIf="form.get('description')?.hasError('required')">La descripción es obligatoria</mat-error>
            </mat-form-field>

            <div class="form-row">
              <mat-form-field appearance="outline" class="flex-1">
                <mat-label>Precio del Servicio</mat-label>
                <input matInput type="number" formControlName="price">
                <span matPrefix>S/&nbsp;</span>
                <mat-icon matSuffix>payments</mat-icon>
                <mat-error *ngIf="form.get('price')?.hasError('required')">El precio es obligatorio</mat-error>
                <mat-error *ngIf="form.get('price')?.hasError('min')">El precio debe ser mayor a 0</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="flex-1">
                <mat-label>Estado de Visibilidad</mat-label>
                <mat-select formControlName="status">
                  <mat-option value="active">Activo</mat-option>
                  <mat-option value="inactive">Inactivo</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </div>
        </form>
      </mat-dialog-content>

      <mat-dialog-actions align="end" class="form-actions">
        <button mat-stroked-button (click)="onCancel()">{{ 'APPOINTMENT.FORM.CANCEL' | translate }}</button>
        <button mat-flat-button color="primary" (click)="onSubmit()" [disabled]="form.invalid" class="submit-button">
          <mat-icon>save</mat-icon>
          {{ (data ? 'CLIENTS.ACTIONS.UPDATE' : 'SERVICES.ACTIONS.SAVE_SERVICE') | translate }}
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .form-container {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .form-header {
      display: flex;
      align-items: center;
      padding: 24px;
      background: #f8fafc;
      border-bottom: 1px solid #e2e8f0;
      position: relative;
      gap: 16px;
    }

    .header-icon {
      width: 48px;
      height: 48px;
      background: #e0f2fe;
      color: #0369a1;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header-icon mat-icon {
      font-size: 28px;
      width: 28px;
      height: 28px;
    }

    .header-content {
      flex: 1;
    }

    .form-title {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
    }

    .form-subtitle {
      margin: 2px 0 0;
      font-size: 0.875rem;
      color: #64748b;
    }

    .close-button {
      position: absolute;
      top: 12px;
      right: 12px;
      color: #94a3b8;
    }

    mat-dialog-content {
      padding: 24px !important;
      max-height: 70vh;
    }


    .service-form {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-left: 12px;
    }

    .form-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .section-title {
      margin: 0;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #94a3b8;
      padding-left: 4px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .full-width {
      width: 100%;
    }

    .form-row {
      display: flex;
      gap: 16px;
    }

    .flex-1 {
      flex: 1;
    }

    .option-content {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .status-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .status-icon.active { color: #10b981; }
    .status-icon.inactive { color: #f59e0b; }

    .form-actions {
      padding: 16px 24px;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
      gap: 12px;
    }

    .submit-button {
      padding: 0 24px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    @media (max-width: 600px) {
      .form-grid, .form-row {
        grid-template-columns: 1fr;
        flex-direction: column;
      }
    }
  `]
})
export class ServiceFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<ServiceFormComponent>);
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
    price: [null, [Validators.required, Validators.min(0.01)]],
    status: ['active'],
    isFeatured: [false]
  });

  ngOnInit(): void {
    if (this.data) {
        this.form.patchValue(this.data);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const value = { ...this.form.value };
      if (value.category) value.category = value.category.trim();
      if (value.name) value.name = value.name.trim();
      this.dialogRef.close(value);
    }
  }
}
