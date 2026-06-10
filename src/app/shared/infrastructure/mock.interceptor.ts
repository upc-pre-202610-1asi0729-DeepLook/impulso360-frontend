import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

// Seed Data
const DEFAULT_USERS = [
  {
    id: "1",
    name: "Admin Demo",
    email: "admin@demo.com",
    password: "123456",
    role: "administrador",
    phone: "+51 999 888 777",
    businessId: "1"
  },
  {
    id: "2",
    name: "Cliente Demo",
    email: "cliente@demo.com",
    password: "123456",
    role: "cliente",
    phone: "+51 999 111 222"
  }
];

const DEFAULT_BUSINESS_PROFILES = [
  {
    id: "1",
    name: {
      legalName: "Veterinaria & Estética Canina San Isidro S.A.C.",
      publicDisplayName: "vetrinaria"
    },
    address: {
      street: "Calle Las Flores 123",
      city: "Lima",
      reference: "Frente al parque"
    },
    description: "Clínica veterinaria y estética canina profesional.",
    phone: "999999999",
    category: "VETERINARIA",
    isPublished: true,
    coverImage: "",
    ownerId: "1"
  }
];

const DEFAULT_SERVICES = [
  {
    id: "1",
    name: "Consulta Veterinaria General",
    description: "Evaluación completa del estado de salud de tu mascota, incluye revisión física, peso y recomendaciones nutricionales.",
    durationMinutes: 30,
    price: { amount: 80, currency: "PEN" },
    status: "ACTIVE",
    category: "PREVENCION",
    isFeatured: true,
    businessId: "1"
  },
  {
    id: "2",
    name: "Baño y Corte de Pelo",
    description: "Servicio completo de grooming: baño con productos hipoalergénicos, secado, corte de pelo según raza y limpieza de oídos.",
    durationMinutes: 90,
    price: { amount: 65, currency: "PEN" },
    status: "ACTIVE",
    category: "ESTETICA",
    isFeatured: true,
    businessId: "1"
  },
  {
    id: "3",
    name: "Vacunación Múltiple",
    description: "Aplicación de vacunas antirrábica, parvovirus, distemper y leptospirosis. Incluye carnet de vacunación actualizado.",
    durationMinutes: 20,
    price: { amount: 120, currency: "PEN" },
    status: "ACTIVE",
    category: "PREVENCION",
    isFeatured: false,
    businessId: "1"
  }
];

const DEFAULT_APPOINTMENTS = [
  {
    id: "1",
    date: "2026-06-15",
    time: "09:00",
    clientName: "Laura Castillo",
    service: "Consulta Veterinaria General",
    category: "PREVENCION",
    status: "confirmed",
    note: "Consulta de rutina",
    businessId: "1"
  },
  {
    id: "2",
    date: "2026-06-15",
    time: "10:30",
    clientName: "Carlos Mendoza",
    service: "Baño y Corte de Pelo",
    category: "ESTETICA",
    status: "pending",
    note: "Traer carnet",
    businessId: "1"
  }
];

const DEFAULT_CLIENTS = [
  {
    id: "1",
    businessId: "1",
    firstName: "Laura",
    lastName: "Castillo",
    phone: "+51 987 654 321",
    email: "laura.castillo@gmail.com",
    status: "active",
    notes: "Prefiere recordatorios por WhatsApp.",
    createdAt: "2026-04-01",
    lastAppointment: "2026-04-26",
    totalAppointments: 8,
    attendedAppointments: 7,
    history: []
  },
  {
    id: "2",
    businessId: "1",
    firstName: "Carlos",
    lastName: "Mendoza",
    phone: "+51 912 345 678",
    email: "carlos.mendoza@gmail.com",
    status: "active",
    notes: "",
    createdAt: "2026-04-03",
    lastAppointment: "2026-04-26",
    totalAppointments: 5,
    attendedAppointments: 4,
    history: []
  }
];

const DEFAULT_NOTIFICATIONS = [
  {
    id: "1",
    type: "alert",
    title: "Cita en 25 minutos",
    description: "Carlos Mendoza · Vacunación · 10:30 am",
    time: "Hace 5 min",
    read: true,
    appointmentId: 2
  },
  {
    id: "2",
    type: "pending",
    title: "Cita pendiente de confirmación",
    description: "Laura Castillo · Consulta general · 09:00",
    time: "Hace 20 min",
    read: false,
    appointmentId: 1
  }
];

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  
  constructor() {
    this.initStorage();
  }

  private initStorage() {
    if (typeof window === 'undefined') return;
    this.setIfEmpty('mock_users', DEFAULT_USERS);
    this.setIfEmpty('mock_business-profiles', DEFAULT_BUSINESS_PROFILES);
    this.setIfEmpty('mock_services', DEFAULT_SERVICES);
    this.setIfEmpty('mock_appointments', DEFAULT_APPOINTMENTS);
    this.setIfEmpty('mock_clients', DEFAULT_CLIENTS);
    this.setIfEmpty('mock_notifications', DEFAULT_NOTIFICATIONS);
  }

  private setIfEmpty(key: string, data: any) {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  private getCollection(key: string): any[] {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  }

  private saveCollection(key: string, data: any[]) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // If not in mock mode or not calling environment.baseUrl, pass-through
    if (!environment.mock) {
      return next.handle(req);
    }

    const url = req.url;
    
    // Parse URL helper
    const getParam = (name: string): string | null => {
      try {
        const urlObj = new URL(req.urlWithParams);
        return urlObj.searchParams.get(name);
      } catch (e) {
        const urlObj = new URL(req.urlWithParams, 'http://localhost');
        return urlObj.searchParams.get(name);
      }
    };

    // Extract ID from URL for resource endpoints: e.g. /users/123 -> "123"
    const matchId = (prefix: string): string | null => {
      const pattern = new RegExp(`${prefix}/([^/?]+)`);
      const match = url.match(pattern);
      return match ? match[1] : null;
    };

    console.log(`[Mock Mode Intercepted]: ${req.method} ${req.urlWithParams}`);

    let responseBody: any = null;
    let status = 200;

    // --- 1. USERS HANDLER ---
    if (url.includes('/users')) {
      const id = matchId('/users');
      const users = this.getCollection('mock_users');

      if (req.method === 'GET') {
        if (id) {
          responseBody = users.find(u => String(u.id) === String(id)) || null;
          if (!responseBody) status = 404;
        } else {
          const emailQuery = getParam('email');
          if (emailQuery) {
            responseBody = users.filter(u => u.email.toLowerCase() === emailQuery.toLowerCase());
          } else {
            responseBody = users;
          }
        }
      } else if (req.method === 'POST') {
        const newUser = { ...req.body, id: String(Date.now()) };
        users.push(newUser);
        this.saveCollection('mock_users', users);
        responseBody = newUser;
      } else if (req.method === 'PATCH' && id) {
        const index = users.findIndex(u => String(u.id) === String(id));
        if (index !== -1) {
          users[index] = { ...users[index], ...req.body };
          this.saveCollection('mock_users', users);
          responseBody = users[index];
        } else {
          status = 404;
        }
      }
    }

    // --- 2. BUSINESS PROFILES HANDLER ---
    else if (url.includes('/business-profiles')) {
      const id = matchId('/business-profiles');
      const profiles = this.getCollection('mock_business-profiles');

      if (req.method === 'GET') {
        if (id) {
          responseBody = profiles.find(p => String(p.id) === String(id)) || null;
          if (!responseBody) status = 404;
        } else {
          responseBody = profiles;
        }
      } else if (req.method === 'POST') {
        const newProfile = { ...req.body, id: String(Date.now()) };
        profiles.push(newProfile);
        this.saveCollection('mock_business-profiles', profiles);
        responseBody = newProfile;
      } else if (req.method === 'PUT' && id) {
        const index = profiles.findIndex(p => String(p.id) === String(id));
        if (index !== -1) {
          profiles[index] = { ...profiles[index], ...req.body };
          this.saveCollection('mock_business-profiles', profiles);
          responseBody = profiles[index];
        } else {
          status = 404;
        }
      } else if (req.method === 'DELETE' && id) {
        const filtered = profiles.filter(p => String(p.id) !== String(id));
        this.saveCollection('mock_business-profiles', filtered);
        responseBody = {};
      }
    }

    // --- 3. APPOINTMENTS HANDLER ---
    else if (url.includes('/appointments')) {
      const id = matchId('/appointments');
      const appointments = this.getCollection('mock_appointments');

      if (req.method === 'GET') {
        if (id) {
          responseBody = appointments.find(a => String(a.id) === String(id)) || null;
          if (!responseBody) status = 404;
        } else {
          const businessIdQuery = getParam('businessId');
          if (businessIdQuery) {
            responseBody = appointments.filter(a => String(a.businessId) === String(businessIdQuery));
          } else {
            responseBody = appointments;
          }
        }
      } else if (req.method === 'POST') {
        const newAppointment = { ...req.body, id: String(Date.now()) };
        appointments.push(newAppointment);
        this.saveCollection('mock_appointments', appointments);
        responseBody = newAppointment;
      }
    }

    // --- 4. SERVICES HANDLER ---
    else if (url.includes('/services')) {
      const id = matchId('/services');
      const services = this.getCollection('mock_services');

      if (req.method === 'GET') {
        if (id) {
          responseBody = services.find(s => String(s.id) === String(id)) || null;
          if (!responseBody) status = 404;
        } else {
          const businessIdQuery = getParam('businessId');
          if (businessIdQuery) {
            responseBody = services.filter(s => String(s.businessId) === String(businessIdQuery));
          } else {
            responseBody = services;
          }
        }
      } else if (req.method === 'POST') {
        const newService = { ...req.body, id: String(Date.now()) };
        services.push(newService);
        this.saveCollection('mock_services', services);
        responseBody = newService;
      } else if (req.method === 'PUT' && id) {
        const index = services.findIndex(s => String(s.id) === String(id));
        if (index !== -1) {
          services[index] = { ...services[index], ...req.body };
          this.saveCollection('mock_services', services);
          responseBody = services[index];
        } else {
          status = 404;
        }
      } else if (req.method === 'DELETE' && id) {
        const filtered = services.filter(s => String(s.id) !== String(id));
        this.saveCollection('mock_services', filtered);
        responseBody = {};
      }
    }

    // --- 5. CLIENTS HANDLER ---
    else if (url.includes('/clients')) {
      const id = matchId('/clients');
      const clients = this.getCollection('mock_clients');

      if (req.method === 'GET') {
        if (id) {
          responseBody = clients.find(c => String(c.id) === String(id)) || null;
          if (!responseBody) status = 404;
        } else {
          const emailQuery = getParam('email');
          const businessIdQuery = getParam('businessId');
          let result = clients;
          if (emailQuery) {
            result = result.filter(c => c.email === emailQuery);
          }
          if (businessIdQuery) {
            result = result.filter(c => String(c.businessId) === String(businessIdQuery));
          }
          responseBody = result;
        }
      } else if (req.method === 'POST') {
        const newClient = { ...req.body, id: String(Date.now()), createdAt: new Date().toISOString().split('T')[0] };
        clients.push(newClient);
        this.saveCollection('mock_clients', clients);
        responseBody = newClient;
      } else if (req.method === 'PUT' && id) {
        const index = clients.findIndex(c => String(c.id) === String(id));
        if (index !== -1) {
          clients[index] = { ...clients[index], ...req.body };
          this.saveCollection('mock_clients', clients);
          responseBody = clients[index];
        } else {
          status = 404;
        }
      } else if (req.method === 'DELETE' && id) {
        const filtered = clients.filter(c => String(c.id) !== String(id));
        this.saveCollection('mock_clients', filtered);
        responseBody = {};
      }
    }

    // --- 6. NOTIFICATIONS HANDLER ---
    else if (url.includes('/notifications')) {
      const id = matchId('/notifications');
      const notifications = this.getCollection('mock_notifications');

      if (req.method === 'GET') {
        responseBody = notifications;
      } else if (req.method === 'PATCH' && id) {
        const index = notifications.findIndex(n => String(n.id) === String(id));
        if (index !== -1) {
          notifications[index] = { ...notifications[index], ...req.body };
          this.saveCollection('mock_notifications', notifications);
          responseBody = notifications[index];
        } else {
          status = 404;
        }
      }
    }

    // Default response for unhandled endpoints
    if (responseBody === null && status === 200) {
      responseBody = {};
    }

    return of(new HttpResponse({ status, body: responseBody })).pipe(delay(300));
  }
}
