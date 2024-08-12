import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [JsonPipe],
  template: `
    <div>
      Home!
    </div>
    <div>
      Logged in: {{ !!auth.state() }}
    </div>
    <sl-button (click)="auth.logout()">
      Log out
    </sl-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  auth = inject(AuthService);
}
