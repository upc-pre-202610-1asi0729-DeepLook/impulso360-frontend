export type ServiceStatus = 'activo' | 'inactivo';
export type ServiceCategory =
    | 'Veterinaria'
    | 'Prevención'
    | 'Estética'
    | 'Cirugía'
    | string;

export interface ServiceProps {
    id: string;
    name: string;
    category: ServiceCategory;
    description: string;
    price: number;
    status: ServiceStatus;
    isFeatured: boolean;
}

export class Service {
    private constructor(private readonly props: ServiceProps) {}

    static create(props: ServiceProps): Service {
        return new Service({ ...props });
    }

    get id(): string { return this.props.id; }
    get name(): string { return this.props.name; }
    get category(): ServiceCategory { return this.props.category; }
    get description(): string { return this.props.description; }
    get price(): number { return this.props.price; }
    get status(): ServiceStatus { return this.props.status; }
    get isFeatured(): boolean { return this.props.isFeatured; }
    get isActive(): boolean { return this.props.status === 'activo'; }

    feature(): Service {
        return new Service({ ...this.props, isFeatured: true });
    }

    unfeature(): Service {
        return new Service({ ...this.props, isFeatured: false });
    }

    toPlainObject(): ServiceProps {
        return { ...this.props };
    }
}