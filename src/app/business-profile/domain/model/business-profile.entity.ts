import { BusinessName } from './business-name.value-object';
import { Address } from './address.value-object';
import { Service } from './service.entity';
import { ServiceCategory } from './service-category.enum';

export class BusinessProfile {
    private _id: number | string;
    private _name: BusinessName;
    private _address: Address;
    private _description: string;
    private _phone: string;
    private _category: ServiceCategory;
    private _isPublished: boolean;
    private _services: Service[];
    private _coverImage?: string;
    private _ownerId?: string;

    constructor(
        id: number | string,
        name: BusinessName,
        address: Address,
        description: string,
        phone: string,
        category: ServiceCategory,
        isPublished: boolean,
        services: Service[] = [],
        coverImage?: string,
        ownerId?: string
    ) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._description = description?.trim() ?? '';
        this._phone = phone?.trim() ?? '';
        this._category = category;
        this._isPublished = isPublished;
        this._services = services;
        this._coverImage = coverImage;
        this._ownerId = ownerId;
    }

    get id(): number | string { return this._id; }
    get name(): BusinessName { return this._name; }
    get address(): Address { return this._address; }
    get description(): string { return this._description; }
    get phone(): string { return this._phone; }
    get category(): ServiceCategory { return this._category; }
    get isPublished(): boolean { return this._isPublished; }
    get services(): Service[] { return [...this._services]; }
    get coverImage(): string | undefined { return this._coverImage; }
    get ownerId(): string | undefined { return this._ownerId; }

    publishService(service: Service): void {
        const alreadyExists = this._services.some(s => s.id === service.id);
        if (alreadyExists)
            throw new Error(`El servicio con id ${service.id} ya fue publicado`);
        this._services.push(service);
    }
}