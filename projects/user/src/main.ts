import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { UserComponent } from './app/user.component';
import { USER_ROUTES } from './app/user.routes';

bootstrapApplication(UserComponent, {
  providers: [
    provideRouter(USER_ROUTES)
  ]
}).catch(err => console.error(err));
