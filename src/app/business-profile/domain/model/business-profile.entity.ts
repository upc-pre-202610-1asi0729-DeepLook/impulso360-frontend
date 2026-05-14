import { BusinessName } from './business-name.value-object';
import { Address } from './address.value-object';
import { Service } from './service.entity';
import { ServiceCategory } from './service-category.enum';

export class BusinessProfile {
    private _id: number;
    private _name: BusinessName;
    private _address: Address;
    private _description: string;
    private _phone: string;
    private _category: ServiceCategory;
    private _isPublished: boolean;
    private _services: Service[];

    constructor(
        id: number,
        name: BusinessName,
        address: Address,
        description: string,
        phone: string,
        category: ServiceCategory,
        isPublished: boolean,
        services: Service[] = []
    ) {
        if (!phone || phone.trim().length === 0)
            throw new Error('El teléfono no puede estar vacío');

        this._id = id;
        this._name = name;
        this._address = address;
        this._description = description?.trim() ?? '';
        this._phone = phone.trim();
        this._category = category;
        this._isPublished = isPublished;
        this._services = services;
    }

    get id(): number { return this._id; }
    get name(): BusinessName { return this._name; }
    get address(): Address { return this._address; }
    get description(): string { return this._description; }
    get phone(): string { return this._phone; }
    get category(): ServiceCategory { return this._category; }
    get isPublished(): boolean { return this._isPublished; }
    get services(): Service[] { return [...this._services]; }

    publishService(service: Service): void {
        const alreadyExists = this._services.some(s => s.id === service.id);
        if (alreadyExists)
            throw new Error(`El servicio con id ${service.id} ya fue publicado`);
        this._services.push(service);
    }
}