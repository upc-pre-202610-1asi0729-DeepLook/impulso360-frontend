import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from '../domain/model/client.entity';
import { ClientAssembler } from './client-assembler';
import { ClientResource, CreateClientResource } from './client.resource';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClientApiService {
    private readonly baseUrl = `${environment.baseUrl}/api/v1/clients`;

    constructor(private readonly http: HttpClient) {}

    getAll(businessId?: number | string): Observable<Client[]> {
        const clientsUrl = businessId ? `${this.baseUrl}?businessId=${businessId}` : this.baseUrl;

        return forkJoin([
            this.http.get<ClientResource[]>(clientsUrl).pipe(catchError(() => of([] as ClientResource[]))),
            this.http.get<any[]>(`${environment.baseUrl}/api/v1/users`).pipe(catchError(() => of([] as any[])))
        ]).pipe(
            map(([clientResources, users]) => {
                const nameByEmail = new Map<string, string>();
                for (const u of users) {
                    if (u.email && u.name) nameByEmail.set(u.email, u.name);
                }

                const entities = ClientAssembler.toEntities(clientResources);
                for (const c of entities) {
                    const userName = nameByEmail.get(c.email);
                    if (userName) {
                        const parts = userName.split(' ');
                        c.firstName = parts[0];
                        c.lastName = parts.slice(1).join(' ');
                    }
                }
                return entities;
            })
        );
    }

    create(client: Partial<Client>): Observable<Client> {
        const resource: CreateClientResource = ClientAssembler.toResource(client);

        return this.http
            .post<ClientResource>(this.baseUrl, resource)
            .pipe(map((createdResource) => ClientAssembler.toEntity(createdResource)));
    }

    update(id: any, client: Partial<Client>): Observable<Client> {
        const resource = ClientAssembler.toResource(client);

        return this.http
            .put<ClientResource>(`${this.baseUrl}/${id}`, resource)
            .pipe(map((updatedResource) => ClientAssembler.toEntity(updatedResource)));
    }

    delete(id: any): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
