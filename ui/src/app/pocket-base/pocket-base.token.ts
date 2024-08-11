import { InjectionToken } from '@angular/core';
import { TypedPocketBase } from '../../../pocketbase-types';

export const POCKET_BASE_TOKEN = new InjectionToken<TypedPocketBase>('pocket_base_token');
