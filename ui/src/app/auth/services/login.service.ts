import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, Subject, switchMap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AuthCredentials } from '../types/auth-credentials.interface';

export type LoginStatus = 'pending' | 'authenticating' | 'success' | 'error';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // selectors
  loginStatus = computed(() => this.state());

  private authService = inject(AuthService);

  // sources
  login$ = new Subject<AuthCredentials>();
  private error$ = new Subject<Error>();

  userAuthenticated$ = this.login$.pipe(
    switchMap((credentials) =>
      this.authService.login(credentials).pipe(
        catchError(err => {
          this.error$.next(err);
          return EMPTY;
        })
      )
    )
  );

  // state
  private state = signal<LoginStatus>('pending');

  constructor() {
    // reducers
    this.userAuthenticated$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.state.set('success'));

    this.login$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.state.set('authenticating'));

    this.error$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.state.set('error'));
  }
}