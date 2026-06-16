export interface BusinessProfile {
  id: number;
  ownerId?: string;
  name: {
    legalName: string;
    publicDisplayName: string;
  };
  address: {
    street: string;
    city: string;
    reference: string;
  };
  description: string;
  phone: string;
  category: string;
  isPublished: boolean;
  coverImage?: string;
  services: BusinessService[];
}

export interface BusinessService {
  id: number;
  name: string;
  description: string;
  durationMinutes: number;
  price: { amount: number; currency: string };
  status: string;
  category: string;
  isFeatured: boolean;
}
