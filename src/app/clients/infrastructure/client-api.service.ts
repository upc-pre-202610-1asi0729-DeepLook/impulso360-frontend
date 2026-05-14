import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Client } from '../domain/model/client.entity';
import { ClientAssembler } from './client-assembler';
import { ClientResource, CreateClientResource } from './client.resource';

@Injectable({
    providedIn: 'root'
})
export class ClientApiService {
    private readonly baseUrl = 'http://localhost:3000/clients';

    constructor(private readonly http: HttpClient) {}

    getAll(): Observable<Client[]> {
        return this.http
            .get<ClientResource[]>(this.baseUrl)
            .pipe(map((resources) => ClientAssembler.toEntities(resources)));
    }

    create(client: Partial<Client>): Observable<Client> {
        const resource: CreateClientResource = ClientAssembler.toResource(client);

        return this.http
            .post<ClientResource>(this.baseUrl, resource)
            .pipe(map((createdResource) => ClientAssembler.toEntity(createdResource)));
    }

    update(id: number, client: Partial<Client>): Observable<Client> {
        const resource = ClientAssembler.toResource(client);

        return this.http
            .put<ClientResource>(`${this.baseUrl}/${id}`, resource)
            .pipe(map((updatedResource) => ClientAssembler.toEntity(updatedResource)));
    }

}