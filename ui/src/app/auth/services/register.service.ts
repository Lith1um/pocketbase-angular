import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, Subject, catchError, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthUserCreate } from '../types/user-create.interface';

export type RegisterStatus = 'pending' | 'creating' | 'success' | 'error';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // selectors
  registerStatus = computed(() => this.state());

  private authService = inject(AuthService);

  // sources
  createUser$ = new Subject<AuthUserCreate>();
  private error$ = new Subject<any>();

  userCreated$ = this.createUser$.pipe(
    switchMap((credentials) =>
      this.authService.register(credentials).pipe(
        catchError((err) => {
          this.error$.next(err);
          return EMPTY;
        })
      )
    )
  );

  // state
  private state = signal<RegisterStatus>('pending');

  constructor() {
    // reducers
    this.userCreated$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.state.set('success'));

    this.createUser$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.state.set('creating'));

    this.error$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.state.set('error'));
  }
}