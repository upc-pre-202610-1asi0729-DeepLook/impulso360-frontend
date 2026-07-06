export interface ServiceDto {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    status: 'active' | 'inactive';
    isFeatured: boolean;
    isActive: boolean;
    businessId?: number | string;
}

export interface CreateServiceDto {
    name: string;
    category: string;
    description: string;
    price: number;
    status: 'active' | 'inactive';
    businessId?: number | string;
}