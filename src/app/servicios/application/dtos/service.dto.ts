export interface ServiceDto {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    status: 'activo' | 'inactivo';
    isFeatured: boolean;
    isActive: boolean;
}

export interface CreateServiceDto {
    name: string;
    category: string;
    description: string;
    price: number;
    status: 'activo' | 'inactivo';
}