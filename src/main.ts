import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TestListComponent } from './app/test-list/test-list.component';
import { UsersComponent } from './app/users/users.component';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [TestListComponent,UsersComponent ],
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-test-list></app-test-list>
    <app-users></app-users>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

// bootstrapApplication(App);


bootstrapApplication(App, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err))