export type UserRole = 'cliente' | 'administrador';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: UserRole;
  businessId?: number | string;
  phone?: string;
}
