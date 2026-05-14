import { computed, Injectable, signal } from '@angular/core';
import { Client } from '../../domain/model/client.entity';
import { ClientApiService } from '../../infrastructure/client-api.service';

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

    constructor(private readonly clientApiService: ClientApiService) {}

    loadClients(): void {
        this.loadingSignal.set(true);

        this.clientApiService.getAll().subscribe({
            next: (clients) => {
                this.clientsSignal.set(clients);
                this.selectedClientSignal.set(clients[0] ?? null);
                this.loadingSignal.set(false);
            },
            error: (error) => {
                console.error('Error loading clients:', error);
                this.loadingSignal.set(false);
            }
        });
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
        this.clientApiService.create(client).subscribe({
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

    updateClient(id: number, client: Partial<Client>): void {
        this.clientApiService.update(id, client).subscribe({
            next: (updatedClient) => {
                this.clientsSignal.update((clients) =>
                    clients.map((currentClient) =>
                        currentClient.id === id ? updatedClient : currentClient
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
}