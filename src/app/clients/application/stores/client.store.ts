import { computed, Injectable, signal, inject } from '@angular/core';
import { Client } from '../../domain/model/client.entity';
import { ClientApiService } from '../../infrastructure/client-api.service';
import { AgendaApi } from '../../../agenda/infrastructure/agenda-api';
import { forkJoin, of, switchMap } from 'rxjs';
import { AuthStore } from '../../../auth/application/auth-store';
import { Appointment } from '../../../agenda/domain/model/appointment.entity';

@Injectable({
    providedIn: 'root'
})
export class ClientStore {
    private readonly clientsSignal = signal<Client[]>([]);
    private readonly selectedClientSignal = signal<Client | null>(null);
    private readonly clientToEditSignal = signal<Client | null>(null);
    private readonly searchTermSignal = signal<string>('');
    private readonly loadingSignal = signal<boolean>(false);
    private readonly modalOpenSignal = signal<boolean>(false);

    readonly clients = this.clientsSignal.asReadonly();
    readonly selectedClient = this.selectedClientSignal.asReadonly();
    readonly clientToEdit = this.clientToEditSignal.asReadonly();
    readonly searchTerm = this.searchTermSignal.asReadonly();
    readonly loading = this.loadingSignal.asReadonly();
    readonly modalOpen = this.modalOpenSignal.asReadonly();

    readonly filteredClients = computed(() => {
        const term = this.searchTermSignal().toLowerCase().trim();

        if (!term) {
            return this.clientsSignal();
        }

        return this.clientsSignal().filter((client) => {
            return (
                client.fullName.toLowerCase().includes(term) ||
                client.phone.toLowerCase().includes(term)
            );
        });
    });

    readonly totalClients = computed(() => this.clientsSignal().length);

    readonly activeClients = computed(() => {
        return this.clientsSignal().filter((client) => client.isActive).length;
    });

    readonly newThisMonth = computed(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        return this.clientsSignal().filter((client) => {
            const createdAt = new Date(client.createdAt);
            return (
                createdAt.getMonth() === currentMonth &&
                createdAt.getFullYear() === currentYear
            );
        }).length;
    });

    private authStore = inject(AuthStore);

    constructor(
        private readonly clientApiService: ClientApiService,
        private readonly agendaApi: AgendaApi
    ) {}

    loadClients(): void {
        this.loadingSignal.set(true);
        const businessId = this.authStore.currentUser()?.businessId;

        forkJoin([
            this.clientApiService.getAll(businessId),
            this.agendaApi.getAllAppointments(businessId)
        ]).subscribe({
            next: ([clients, appointments]) => {
                const enriched = clients.map(client => this.computeAppointmentStats(client, appointments));
                this.clientsSignal.set(enriched);
                this.selectedClientSignal.set(enriched[0] ?? null);
                this.loadingSignal.set(false);
            },
            error: (error) => {
                console.error('Error loading clients:', error);
                this.loadingSignal.set(false);
            }
        });
    }

    private computeAppointmentStats(client: Client, appointments: Appointment[]): Client {
        const clientFullName = client.fullName;
        const clientEmail = client.email;

        const matching = appointments.filter(a =>
            a.clientEmail === clientEmail ||
            a.clientName === clientFullName
        );

        client.totalAppointments = matching.length;
        client.attendedAppointments = matching.filter(a => a.status === 'confirmed').length;
        return client;
    }

    setSearchTerm(term: string): void {
        this.searchTermSignal.set(term);
    }

    selectClient(client: Client): void {
        this.selectedClientSignal.set(client);
    }

    openCreateModal(): void {
        this.clientToEditSignal.set(null);
        this.modalOpenSignal.set(true);
    }

    openEditModal(client: Client): void {
        this.clientToEditSignal.set(client);
        this.modalOpenSignal.set(true);
    }

    closeModal(): void {
        this.modalOpenSignal.set(false);
        this.clientToEditSignal.set(null);
    }

    createClient(client: Partial<Client>): void {
        const businessId = this.authStore.currentUser()?.businessId;
        this.clientApiService.create({ ...client, businessId }).subscribe({
            next: (createdClient) => {
                this.clientsSignal.update((clients) => [...clients, createdClient]);
                this.selectedClientSignal.set(createdClient);
                this.closeModal();
            },
            error: (error) => {
                console.error('Error creating client:', error);
            }
        });
    }

    updateClient(id: any, client: Partial<Client>): void {
        this.clientApiService.update(id, client).subscribe({
            next: (updatedClient) => {
                this.clientsSignal.update((clients) =>
                    clients.map((currentClient) =>
                        String(currentClient.id) === String(id) ? updatedClient : currentClient
                    )
                );

                this.selectedClientSignal.set(updatedClient);
                this.closeModal();
            },
            error: (error) => {
                console.error('Error updating client:', error);
            }
        });
    }

    saveClient(client: Partial<Client>): void {
        const clientToEdit = this.clientToEditSignal();

        if (clientToEdit) {
            this.updateClient(clientToEdit.id, {
                ...clientToEdit,
                ...client
            });
            return;
        }

        this.createClient(client);
    }

    deleteClient(id: any): void {
        const client = this.clientsSignal().find(c => String(c.id) === String(id));
        if (!client) {
            console.error('No se pudo encontrar al cliente con ID:', id);
            return;
        }

        if (!confirm(`¿Estás seguro de que deseas eliminar al cliente ${client.fullName}? Esto también eliminará todas sus citas asociadas.`)) {
            return;
        }

        this.agendaApi.getAppointmentsByClientName(client.fullName).pipe(
            switchMap(appointments => {
                if (appointments && appointments.length > 0) {
                    const deleteRequests = appointments
                        .filter(app => app.id !== undefined && app.id !== null)
                        .map(app => this.agendaApi.deleteAppointment(app.id!));
                    
                    if (deleteRequests.length > 0) {
                        return forkJoin(deleteRequests).pipe(
                            switchMap(() => this.clientApiService.delete(id))
                        );
                    }
                }
                return this.clientApiService.delete(id);
            })
        ).subscribe({
            next: () => {
                this.clientsSignal.update((clients) =>
                    clients.filter((c) => String(c.id) !== String(id))
                );
                
                if (String(this.selectedClientSignal()?.id) === String(id)) {
                    this.selectedClientSignal.set(this.clientsSignal()[0] ?? null);
                }
            },
            error: (error) => {
                console.error('Error deleting client and appointments:', error);
            }
        });
    }
}