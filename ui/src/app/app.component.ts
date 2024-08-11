import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TestService } from './test.service';
import { JsonPipe } from '@angular/common';
import { TestResponse } from '../../pocketbase-types';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [JsonPipe],
  template: `
    <sl-button (click)="getTests()">
      <sl-icon name="backpack"></sl-icon>
      get tests
    </sl-button>
    {{ tests() | json }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  testService = inject(TestService);

  tests = signal<TestResponse[] | undefined>(undefined);

  async getTests(): Promise<void> {
    const tests = await this.testService.getUsers();
    this.tests.set(tests);
  }
}
