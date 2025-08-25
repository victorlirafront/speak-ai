import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CheckoutComponent } from './app/checkout.component';
import { CHECKOUT_ROUTES } from './app/checkout.routes';

bootstrapApplication(CheckoutComponent, {
  providers: [
    provideRouter(CHECKOUT_ROUTES)
  ]
}).catch(err => console.error(err));
