import { InjectionToken } from '@angular/core';
import { TypedPocketBase } from '../../../pocketbase-types';
import PocketBase from 'pocketbase';
import { environment } from '../../environments/environment';

export const POCKET_BASE = new InjectionToken<TypedPocketBase>('pocket_base_token', {
  providedIn: 'root',
  factory: () => new PocketBase(environment.apiUrl) as TypedPocketBase
});