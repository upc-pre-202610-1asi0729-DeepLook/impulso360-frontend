export class Price {
    private readonly _amount: number;
    private readonly _currency: string;

    constructor(amount: number, currency: string) {
        if (amount < 0)
            throw new Error('El precio no puede ser negativo');
        if (!currency || currency.trim().length === 0)
            throw new Error('La moneda no puede estar vacía');

        this._amount = amount;
        this._currency = currency.trim().toUpperCase();
    }

    get amount(): number {
        return this._amount;
    }

    get currency(): string {
        return this._currency;
    }

    equals(other: Price): boolean {
        return this._amount === other._amount && this._currency === other._currency;
    }
}