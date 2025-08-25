import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CartComponent } from './app/cart.component';
import { CART_ROUTES } from './app/cart.routes';

bootstrapApplication(CartComponent, {
  providers: [
    provideRouter(CART_ROUTES)
  ]
}).catch(err => console.error(err));
