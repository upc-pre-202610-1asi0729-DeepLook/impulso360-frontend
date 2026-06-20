import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ServiceRepository } from '@app/servicios/domain/model/service.repository';
import { Service, ServiceProps } from '@app/servicios/domain/model/service.entity';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceRepository extends ServiceRepository {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.baseUrl}/api/v1/services`;

  override getAll(businessId?: number | string): Observable<Service[]> {
    const params = businessId ? `?businessId=${businessId}` : '';
    return this.http.get<ServiceProps[]>(`${this.baseUrl}${params}`).pipe(
      map(props => props.map(p => Service.create(p)))
    );
  }

  override getById(id: string): Observable<Service | undefined> {
    return this.http.get<ServiceProps>(`${this.baseUrl}/${id}`).pipe(
      map(p => Service.create(p))
    );
  }

  override save(service: Service): Observable<Service> {
    const body = service.toPlainObject();
    return this.http.post<ServiceProps>(this.baseUrl, body).pipe(
      map(p => Service.create(p))
    );
  }

  override delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  override update(service: Service): Observable<Service> {
    const body = service.toPlainObject();
    return this.http.put<ServiceProps>(`${this.baseUrl}/${service.id}`, body).pipe(
      map(p => Service.create(p))
    );
  }
}
