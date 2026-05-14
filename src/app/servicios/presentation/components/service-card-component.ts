import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDto } from '../../application/dtos/service.dto';

@Component({
    selector: 'app-service-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './service-card-component.html',
    styleUrls: ['./service-card-component.css'],
})
export class ServiceCardComponent {
    @Input() service!: ServiceDto;
    @Input() canFeature = true;

    @Output() edit = new EventEmitter<string>();
    @Output() delete = new EventEmitter<string>();
    @Output() toggleFeature = new EventEmitter<string>();

    onEdit(): void { this.edit.emit(this.service.id); }
    onDelete(): void { this.delete.emit(this.service.id); }
    onToggleFeature(): void { this.toggleFeature.emit(this.service.id); }
}