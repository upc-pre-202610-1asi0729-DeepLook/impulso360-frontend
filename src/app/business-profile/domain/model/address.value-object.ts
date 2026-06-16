export class Address {
    private readonly _street: string;
    private readonly _city: string;
    private readonly _reference: string;

    constructor(street: string, city: string, reference: string) {
        this._street = street?.trim() ?? '';
        this._city = city?.trim() ?? '';
        this._reference = reference?.trim() ?? '';
    }

    get street(): string {
        return this._street;
    }

    get city(): string {
        return this._city;
    }

    get reference(): string {
        return this._reference;
    }

    equals(other: Address): boolean {
        return (
            this._street === other._street &&
            this._city === other._city &&
            this._reference === other._reference
        );
    }
}