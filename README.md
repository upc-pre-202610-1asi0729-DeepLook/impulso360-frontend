# Impulso360

## Description
Impulso360 is a comprehensive business management application built with Angular 21+. It follows Domain-Driven Design (DDD) principles and a layered architecture to ensure scalability, maintainability, and clear separation of concerns.

The application includes features for managing schedules, clients, business profiles, and generating reports/notifications.

## Key Technologies
- **Angular 21+**: Modern framework using standalone components and Signals for state management.
- **Angular Material**: Premium UI component library for a consistent design system.
- **Ngx-Translate**: Internationalization (i18n) support for English and Spanish.
- **DDD & Bounded Contexts**: Organized into logical sub-domains (Agenda, Clients, etc.).
- **RxJS & HttpClient**: Robust data fetching and reactive programming.

## Architecture
The project is organized into Bounded Contexts, each containing:
- **Domain**: Entities and business logic.
- **Application**: State management (Stores).
- **Infrastructure**: API communication, data mappers (Assemblers), and DTOs.
- **Presentation**: UI components and routed views.

## Author
- **Name**: DeepLook

## Getting Started
1. Run `npm install` to install dependencies.
2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
3. Run `npm run server` (if configured) to start the JSON backend.
