import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { UsersService } from './users/users.service';
import { UsersResponse } from '../../pocketbase-types';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [JsonPipe],
  template: `
    <sl-button (click)="getUsers()">
      <sl-icon name="backpack"></sl-icon>
      get users
    </sl-button>
    <div>
      {{ users() | json }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  usersService = inject(UsersService);

  users = signal<UsersResponse[] | undefined>(undefined);

  async getUsers(): Promise<void> {
    const users = await this.usersService.getUsers();
    this.users.set(users);
  }
}
