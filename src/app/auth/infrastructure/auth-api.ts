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
    return this.http.get<User[]>(`${this.baseUrl}/users`).pipe(
      map(users => {
        const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
        return found || null;
      })
    );
  }

  register(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  updateUser(id: string, data: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/users/${id}`, data);
  }

  getAllBusinessProfiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/business-profiles`);
  }

  getBusinessProfile(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/business-profiles/${id}`);
  }

  getBusinessProfilesByOwner(ownerId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/business-profiles`).pipe(
      map(list => list.filter(p => String(p.ownerId) === String(ownerId)))
    );
  }

  createBusinessProfile(profile: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/business-profiles`, profile);
  }

  getAppointmentsByBusiness(businessId: number | string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/appointments?businessId=${businessId}`);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/appointments`, appointment);
  }

  getUsersByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`).pipe(
      map(users => users.filter(u => u.role === role))
    );
  }

  getAllServices(businessId?: number | string): Observable<any[]> {
    const url = businessId ? `${this.baseUrl}/services?businessId=${businessId}` : `${this.baseUrl}/services`;
    return this.http.get<any[]>(url);
  }

  getClientsByEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/clients`).pipe(
      map(list => list.filter(c => c.email === email))
    );
  }

  createClient(client: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/clients`, client);
  }

  updateClient(id: any, client: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/clients/${id}`, client);
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${encodeURIComponent(email)}`).pipe(
      map(users => users.length > 0)
    );
  }
}
