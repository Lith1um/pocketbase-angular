import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import PocketBase from 'pocketbase';
import { POCKET_BASE_TOKEN } from './pocket-base/pocket-base.token';
import { TypedPocketBase } from '../../pocketbase-types';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: POCKET_BASE_TOKEN,
      // TODO: replace this value with env
      useFactory: () => new PocketBase('http://127.0.0.1:8090') as TypedPocketBase
    }
  ]
};
