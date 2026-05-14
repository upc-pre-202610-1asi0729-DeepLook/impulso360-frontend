export interface BusinessNameResource {
    legalName: string;
    publicDisplayName: string;
}

export interface AddressResource {
    street: string;
    city: string;
    reference: string;
}

export interface PriceResource {
    amount: number;
    currency: string;
}

export interface ServiceResource {
    id: number;
    name: string;
    description: string;
    durationMinutes: number;
    price: PriceResource;
    status: string;
    category: string;
    isFeatured: boolean;
}

export interface BusinessProfileResource {
    id: number;
    name: BusinessNameResource;
    address: AddressResource;
    description: string;
    phone: string;
    category: string;
    isPublished: boolean;
    services: ServiceResource[];
}