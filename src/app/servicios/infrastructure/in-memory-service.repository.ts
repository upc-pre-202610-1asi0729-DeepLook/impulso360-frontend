import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, map } from 'rxjs';
import { ServiceRepository } from '@app/servicios/domain/model/service.repository';
import { Service } from '@app/servicios/domain/model/service.entity';

const MOCK_SERVICES = [
    { id: '1', name: 'Consulta general', category: 'Veterinaria', description: 'Evaluación general del estado de salud de la mascota.', price: 50, status: 'activo' as const, isFeatured: true },
    { id: '2', name: 'Vacunación', category: 'Prevención', description: 'Aplicación de vacunas según el calendario del animal.', price: 35, status: 'activo' as const, isFeatured: true },
    { id: '3', name: 'Baño y corte', category: 'Estética', description: 'Baño completo y corte de pelo a medida.', price: 45, status: 'activo' as const, isFeatured: true },
    { id: '4', name: 'Desparasitación', category: 'Prevención', description: 'Tratamiento contra parásitos internos y externos.', price: 30, status: 'activo' as const, isFeatured: false },
    { id: '5', name: 'Cirugía menor', category: 'Cirugía', description: 'Procedimientos quirúrgicos de baja complejidad.', price: 200, status: 'inactivo' as const, isFeatured: false },
];

@Injectable()
export class InMemoryServiceRepository extends ServiceRepository {
    private services$ = new BehaviorSubject<Service[]>(
        MOCK_SERVICES.map(p => Service.create(p))
    );

    getAll(): Observable<Service[]> {
        return this.services$.asObservable();
    }

    getById(id: string): Observable<Service | undefined> {
        return this.services$.pipe(
            map(services => services.find(s => s.id === id))
        );
    }

    save(service: Service): Observable<Service> {
        const current = this.services$.getValue();
        this.services$.next([...current, service]);
        return of(service);
    }

    delete(id: string): Observable<void> {
        const current = this.services$.getValue();
        this.services$.next(current.filter(s => s.id !== id));
        return of(void 0);
    }

    update(service: Service): Observable<Service> {
        const current = this.services$.getValue();
        this.services$.next(current.map(s => s.id === service.id ? service : s));
        return of(service);
    }
}