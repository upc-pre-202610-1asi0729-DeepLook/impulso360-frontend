import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, switchMap } from 'rxjs';
import { User } from '../domain/models/user';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthApi {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.baseUrl}/api/v1/users`).pipe(
      map(users => {
        const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
        return found || null;
      })
    );
  }

  register(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/api/v1/users`, user);
  }

  updateUser(id: string, data: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/api/v1/users/${id}`, data);
  }

  getAllBusinessProfiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/v1/businesses`);
  }

  getBusinessProfile(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/v1/businesses/${id}`);
  }

  getBusinessProfilesByOwner(ownerId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/v1/businesses`).pipe(
      map(list => list.filter(p => String(p.ownerId) === String(ownerId)))
    );
  }

  createBusinessProfile(profile: any): Observable<any> {
    const name = profile.name?.publicDisplayName || (typeof profile.name === 'string' ? profile.name : '');
    if (!name || !name.trim()) {
      throw new Error('El nombre del negocio es obligatorio');
    }
    const payload = {
      name: name.trim(),
      category: typeof profile.category === 'string' ? profile.category : '',
      description: profile.description || '',
      phone: profile.phone || '',
      address: profile.address?.street || (typeof profile.address === 'string' ? profile.address : ''),
      ownerId: profile.ownerId ? Number(profile.ownerId) : undefined
    };
    return this.http.post<any>(`${this.baseUrl}/api/v1/businesses`, payload);
  }

  getAppointmentsByBusiness(businessId: number | string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/v1/appointments?businessId=${businessId}`);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/v1/appointments`, appointment);
  }

  getUsersByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/api/v1/users`).pipe(
      map(users => users.filter(u => u.role === role))
    );
  }

  getAllServices(businessId?: number | string): Observable<any[]> {
    const url = businessId ? `${this.baseUrl}/api/v1/services?businessId=${businessId}` : `${this.baseUrl}/api/v1/services`;
    return this.http.get<any[]>(url);
  }

  getClientsByEmail(email: string, businessId?: number | string): Observable<any[]> {
    if (!businessId) return of([]);
    return this.http.get<any[]>(`${this.baseUrl}/api/v1/clients?businessId=${businessId}`).pipe(
      map(list => list.filter(c => c.email === email))
    );
  }

  createClient(client: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/v1/clients`, client);
  }

  updateClient(id: any, client: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/api/v1/clients/${id}`, client);
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.baseUrl}/api/v1/users?email=${encodeURIComponent(email)}`).pipe(
      map(users => users.length > 0)
    );
  }
}
