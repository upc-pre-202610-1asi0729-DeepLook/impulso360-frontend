import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Client } from '../domain/model/client.entity';
import { ClientAssembler } from './client-assembler';
import { ClientResource, CreateClientResource } from './client.resource';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientApiService {
    private readonly baseUrl = environment.production
        ? `${environment.baseUrl}/clients`
        : 'http://localhost:3000/clients';

    constructor(private readonly http: HttpClient) {}

    private toArray<T>(data: any): T[] {
        if (!data) return [];
        if (Array.isArray(data)) return data as T[];
        return Object.values(data) as T[];
    }

    private get listUrl(): string {
        return environment.production ? `${this.baseUrl}.json` : this.baseUrl;
    }

    private itemUrl(id: any): string {
        return environment.production
            ? `${environment.baseUrl}/clients/${id}.json`
            : `${this.baseUrl}/${id}`;
    }

    getAll(): Observable<Client[]> {
        return this.http.get<any>(this.listUrl).pipe(
            map(data => ClientAssembler.toEntities(this.toArray<ClientResource>(data)))
        );
    }

    create(client: Partial<Client>): Observable<Client> {
        const resource: CreateClientResource = ClientAssembler.toResource(client);
        return this.http.post<ClientResource>(this.listUrl, resource).pipe(
            map(created => ClientAssembler.toEntity(created))
        );
    }

    update(id: any, client: Partial<Client>): Observable<Client> {
        const resource = ClientAssembler.toResource(client);
        return this.http.put<ClientResource>(this.itemUrl(id), resource).pipe(
            map(updated => ClientAssembler.toEntity(updated))
        );
    }

    delete(id: any): Observable<void> {
        return this.http.delete<void>(this.itemUrl(id));
    }
}