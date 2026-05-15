import { Injectable, inject } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { HelpFaq } from '../domain/model/help-faq.entity';
import { HelpGuide } from '../domain/model/help-guide.entity';
import { TutorialStep } from '../domain/model/tutorial-step.entity';

import { HelpAssembler } from './help-assembler';
import { HelpFaqResource } from './help-faq.resource';
import { HelpGuideResource } from './help-guide.resource';
import { TutorialStepResource } from './tutorial-step.resource';

type HelpContent = {
    faqs: HelpFaqResource[];
    guides: HelpGuideResource[];
    tutorialSteps: TutorialStepResource[];
};

@Injectable({
    providedIn: 'root'
})
export class HelpApiService {
    private readonly translate = inject(TranslateService);

    private readonly contentByLanguage: Record<string, HelpContent> = {
        es: {
            faqs: [
                {
                    id: 1,
                    question: '¿Cómo registro una nueva cita?',
                    answer: 'Ingresa a la sección Agenda, selecciona Nueva cita, completa los datos del cliente, servicio, fecha y hora. Luego presiona Guardar.'
                },
                {
                    id: 2,
                    question: '¿Puedo reprogramar una cita?',
                    answer: 'Sí. Desde la agenda puedes seleccionar una cita existente, cambiar su fecha u hora y guardar la actualización.'
                },
                {
                    id: 3,
                    question: '¿Cómo cancelo una cita?',
                    answer: 'Selecciona la cita desde la agenda y utiliza la opción Cancelar. El sistema actualizará el estado de la cita y liberará el horario.'
                },
                {
                    id: 4,
                    question: '¿Cómo comparto mi perfil digital?',
                    answer: 'Entra a Perfil del negocio, copia el enlace público de tu perfil y compártelo por WhatsApp, redes sociales o correo.'
                },
                {
                    id: 5,
                    question: '¿Cuántos servicios puedo destacar?',
                    answer: 'Puedes destacar hasta tres servicios principales para que aparezcan con mayor visibilidad en tu perfil digital.'
                },
                {
                    id: 6,
                    question: '¿Puedo exportar el historial?',
                    answer: 'Sí. Desde el historial puedes exportar la información disponible para revisarla o compartirla.'
                }
            ],
            guides: [
                {
                    id: 1,
                    icon: 'calendar_today',
                    title: 'Cómo registrar una nueva cita',
                    description: 'Paso a paso ilustrado · 3 min',
                    route: '/agenda'
                },
                {
                    id: 2,
                    icon: 'person_add',
                    title: 'Cómo agregar un cliente',
                    description: 'Paso a paso ilustrado · 2 min',
                    route: '/clientes'
                },
                {
                    id: 3,
                    icon: 'storefront',
                    title: 'Cómo configurar tu perfil digital',
                    description: 'Paso a paso ilustrado · 4 min',
                    route: '/perfil-negocio'
                },
                {
                    id: 4,
                    icon: 'work_outline',
                    title: 'Cómo gestionar tus servicios',
                    description: 'Paso a paso ilustrado · 3 min',
                    route: '/servicios'
                }
            ],
            tutorialSteps: [
                {
                    id: 1,
                    number: 1,
                    title: 'Configura tu perfil del negocio',
                    description: 'Completa el nombre, descripción, horarios y datos principales de tu negocio.',
                    status: 'completed',
                    route: '/perfil-negocio'
                },
                {
                    id: 2,
                    number: 2,
                    title: 'Agrega tus servicios',
                    description: 'Registra los servicios que ofreces para que puedan ser usados en las citas.',
                    status: 'completed',
                    route: '/servicios'
                },
                {
                    id: 3,
                    number: 3,
                    title: 'Registra tu primera cita',
                    description: 'Crea una cita con cliente, servicio, fecha y hora para organizar tu agenda.',
                    status: 'in-progress',
                    route: '/agenda'
                },
                {
                    id: 4,
                    number: 4,
                    title: 'Registra un cliente',
                    description: 'Guarda los datos de tus clientes para tener mejor seguimiento.',
                    status: 'pending',
                    route: '/clientes'
                },
                {
                    id: 5,
                    number: 5,
                    title: 'Comparte tu perfil digital',
                    description: 'Comparte tu perfil para que más clientes conozcan tus servicios.',
                    status: 'pending',
                    route: '/perfil-negocio'
                }
            ]
        },

        en: {
            faqs: [
                {
                    id: 1,
                    question: 'How do I register a new appointment?',
                    answer: 'Go to the Agenda section, select New appointment, complete the customer, service, date and time information. Then press Save.'
                },
                {
                    id: 2,
                    question: 'Can I reschedule an appointment?',
                    answer: 'Yes. From the agenda, you can select an existing appointment, change its date or time, and save the update.'
                },
                {
                    id: 3,
                    question: 'How do I cancel an appointment?',
                    answer: 'Select the appointment from the agenda and use the Cancel option. The system will update the appointment status and free the time slot.'
                },
                {
                    id: 4,
                    question: 'How do I share my digital profile?',
                    answer: 'Go to Business Profile, copy your public profile link, and share it through WhatsApp, social media, or email.'
                },
                {
                    id: 5,
                    question: 'How many services can I highlight?',
                    answer: 'You can highlight up to three main services so they appear with more visibility in your digital profile.'
                },
                {
                    id: 6,
                    question: 'Can I export the history?',
                    answer: 'Yes. From the history section, you can export the available information to review or share it.'
                }
            ],
            guides: [
                {
                    id: 1,
                    icon: 'calendar_today',
                    title: 'How to register a new appointment',
                    description: 'Includes customer, service, date and time · 3 min',
                    route: '/agenda'
                },
                {
                    id: 2,
                    icon: 'person_add',
                    title: 'How to add a customer',
                    description: 'Step-by-step guide · 2 min',
                    route: '/clientes'
                },
                {
                    id: 3,
                    icon: 'storefront',
                    title: 'How to set up your digital profile',
                    description: 'Step-by-step guide · 4 min',
                    route: '/perfil-negocio'
                },
                {
                    id: 4,
                    icon: 'work_outline',
                    title: 'How to manage your services',
                    description: 'Step-by-step guide · 3 min',
                    route: '/servicios'
                }
            ],
            tutorialSteps: [
                {
                    id: 1,
                    number: 1,
                    title: 'Set up your business profile',
                    description: 'Complete your business name, description, opening hours, and main business information.',
                    status: 'completed',
                    route: '/perfil-negocio'
                },
                {
                    id: 2,
                    number: 2,
                    title: 'Add your services',
                    description: 'Register the services you offer so they can be used when creating appointments.',
                    status: 'completed',
                    route: '/servicios'
                },
                {
                    id: 3,
                    number: 3,
                    title: 'Register your first appointment',
                    description: 'Create an appointment with customer, service, date and time to organize your agenda.',
                    status: 'in-progress',
                    route: '/agenda'
                },
                {
                    id: 4,
                    number: 4,
                    title: 'Register a customer',
                    description: 'Save your customer information to keep better follow-up records.',
                    status: 'pending',
                    route: '/clientes'
                },
                {
                    id: 5,
                    number: 5,
                    title: 'Share your digital profile',
                    description: 'Share your profile so more customers can learn about your services.',
                    status: 'pending',
                    route: '/perfil-negocio'
                }
            ]
        }
    };

    getFaqs(): Observable<HelpFaq[]> {
        return of(this.getCurrentContent().faqs).pipe(
            map((resources) => HelpAssembler.toFaqEntities(resources))
        );
    }

    getGuides(): Observable<HelpGuide[]> {
        return of(this.getCurrentContent().guides).pipe(
            map((resources) => HelpAssembler.toGuideEntities(resources))
        );
    }

    getTutorialSteps(): Observable<TutorialStep[]> {
        return of(this.getCurrentContent().tutorialSteps).pipe(
            map((resources) => HelpAssembler.toTutorialStepEntities(resources))
        );
    }

    private getCurrentContent(): HelpContent {
        const currentLang = this.translate.getCurrentLang() ?? this.translate.getFallbackLang() ?? 'es';
        const normalizedLang = currentLang.startsWith('en') ? 'en' : 'es';

        return this.contentByLanguage[normalizedLang];
    }
}