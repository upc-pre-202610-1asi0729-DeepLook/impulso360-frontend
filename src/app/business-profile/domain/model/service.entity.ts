import { Price } from './price.value-object';
import { ServiceStatus } from './service-status.enum';
import { ServiceCategory } from './service-category.enum';

export class Service {
    private _id: number;
    private _name: string;
    private _description: string;
    private _durationMinutes: number;
    private _price: Price;
    private _status: ServiceStatus;
    private _category: ServiceCategory;
    private _isFeatured: boolean;

    constructor(
        id: number,
        name: string,
        description: string,
        durationMinutes: number,
        price: Price,
        status: ServiceStatus,
        category: ServiceCategory,
        isFeatured: boolean
    ) {
        if (!name || name.trim().length === 0)
            throw new Error('El nombre del servicio no puede estar vacío');
        if (durationMinutes <= 0)
            throw new Error('La duración debe ser mayor a 0');

        this._id = id;
        this._name = name.trim();
        this._description = description?.trim() ?? '';
        this._durationMinutes = durationMinutes;
        this._price = price;
        this._status = status;
        this._category = category;
        this._isFeatured = isFeatured;
    }

    get id(): number { return this._id; }
    get name(): string { return this._name; }
    get description(): string { return this._description; }
    get durationMinutes(): number { return this._durationMinutes; }
    get price(): Price { return this._price; }
    get status(): ServiceStatus { return this._status; }
    get category(): ServiceCategory { return this._category; }
    get isFeatured(): boolean { return this._isFeatured; }

    updatePrice(newPrice: Price): void {
        this._price = newPrice;
    }

    setFeatured(featured: boolean): void {
        this._isFeatured = featured;
    }
}