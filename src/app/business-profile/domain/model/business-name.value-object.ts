export class BusinessName {
    private readonly _legalName: string;
    private readonly _publicDisplayName: string;

    constructor(legalName: string, publicDisplayName: string) {
        if (!legalName || legalName.trim().length === 0)
            throw new Error('El nombre legal no puede estar vacío');
        if (!publicDisplayName || publicDisplayName.trim().length === 0)
            throw new Error('El nombre público no puede estar vacío');

        this._legalName = legalName.trim();
        this._publicDisplayName = publicDisplayName.trim();
    }

    get legalName(): string {
        return this._legalName;
    }

    get publicDisplayName(): string {
        return this._publicDisplayName;
    }

    equals(other: BusinessName): boolean {
        return (
            this._legalName === other._legalName &&
            this._publicDisplayName === other._publicDisplayName
        );
    }
}