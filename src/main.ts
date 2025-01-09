import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TestListComponent } from './app/test-list/test-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TestListComponent],
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-test-list></app-test-list>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
