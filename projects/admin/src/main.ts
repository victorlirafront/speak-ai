import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AdminComponent } from './app/admin.component';
import { ADMIN_ROUTES } from './app/admin.routes';

bootstrapApplication(AdminComponent, {
  providers: [
    provideRouter(ADMIN_ROUTES)
  ]
}).catch(err => console.error(err));
