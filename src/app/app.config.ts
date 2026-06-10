import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideTranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { MatNativeDateModule } from '@angular/material/core';

registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: LOCALE_ID, useValue: 'es' },
    importProvidersFrom(MatNativeDateModule),
    ...provideTranslateHttpLoader({ prefix: './i18n/', suffix: '.json' }),
    importProvidersFrom(
      TranslateModule.forRoot({
        lang: 'es',
        fallbackLang: 'es',
        loader: provideTranslateLoader(TranslateHttpLoader)
      })
    )
  ]
};
