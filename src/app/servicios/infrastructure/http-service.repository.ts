import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ServiceRepository } from '@app/servicios/domain/model/service.repository';
import { Service, ServiceProps } from '@app/servicios/domain/model/service.entity';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpServiceRepository extends ServiceRepository {
  private readonly http = inject(HttpClient);

  private get listUrl(): string {
    return environment.production
        ? `${environment.baseUrl}/services.json`
        : 'http://localhost:3000/services';
  }

  private itemUrl(id: string): string {
    return environment.production
        ? `${environment.baseUrl}/services/${id}.json`
        : `http://localhost:3000/services/${id}`;
  }

  private toArray<T>(data: any): T[] {
    if (!data) return [];
    if (Array.isArray(data)) return data as T[];
    return Object.values(data) as T[];
  }

  override getAll(): Observable<Service[]> {
    return this.http.get<any>(this.listUrl).pipe(
        map(data => this.toArray<ServiceProps>(data).map(p => Service.create(p)))
    );
  }

  override getById(id: string): Observable<Service | undefined> {
    return this.http.get<ServiceProps>(this.itemUrl(id)).pipe(
        map(p => Service.create(p))
    );
  }

  override save(service: Service): Observable<Service> {
    return this.http.post<ServiceProps>(this.listUrl, service.toPlainObject()).pipe(
        map(p => Service.create(p))
    );
  }

  override delete(id: string): Observable<void> {
    return this.http.delete<void>(this.itemUrl(id));
  }

  override update(service: Service): Observable<Service> {
    return this.http.put<ServiceProps>(this.itemUrl(service.id), service.toPlainObject()).pipe(
        map(p => Service.create(p))
    );
  }
}