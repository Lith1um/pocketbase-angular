import { Injectable, inject, signal } from '@angular/core';
import { UsersResponse } from '../../../../pocketbase-types';
import { POCKET_BASE } from '../../pocket-base/pocket-base.token';
import { EMPTY, Observable, Subject, catchError, from, take } from 'rxjs';
import { RecordAuthResponse } from 'pocketbase';
import { AuthCredentials } from '../types/auth-credentials.interface';
import { AuthUserCreate } from '../types/user-create.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  state = signal<UsersResponse | null>(null);

  private pb = inject(POCKET_BASE);

  private refresh$ = from(this.pb.collection('users').authRefresh())
    .pipe(catchError(err => EMPTY));

  constructor() {
    this.refresh$.pipe(take(1)).subscribe();

    this.pb.authStore.onChange((token, authModel) =>
      this.state.set(authModel as UsersResponse));
  }

  // alexrayner94@gmail.com
  // 28eDLcVvX4LY6bY
  login(credentials: AuthCredentials): Observable<RecordAuthResponse<UsersResponse>> {
    return from(this.pb.collection('users').authWithPassword(
      credentials.email,
      credentials.password
    ));
  }

  register(credentials: AuthUserCreate): Observable<UsersResponse> {
    return from(this.pb.collection('users').create(credentials));
  }

  logout(): void {
    this.pb.authStore.clear();
  }
}