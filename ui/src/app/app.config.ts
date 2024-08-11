import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import PocketBase from 'pocketbase';
import { POCKET_BASE_TOKEN } from './pocket-base/pocket-base.token';
import { TypedPocketBase } from '../../pocketbase-types';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: POCKET_BASE_TOKEN,
      useFactory: () => new PocketBase('http://127.0.0.1:8090') as TypedPocketBase
    }
  ]
};
