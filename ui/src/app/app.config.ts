import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import PocketBase from 'pocketbase';
import { TypedPocketBase } from '../../pocketbase-types';

export const POCKET_BASE_TOKEN = new InjectionToken<TypedPocketBase>('pocket_base_token');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: POCKET_BASE_TOKEN,
      useFactory: () => new PocketBase('http://127.0.0.1:8090')
    }
  ]
};
