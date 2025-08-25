import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  template: `
    <div class="checkout-container">
      <h1>Finalizar Compra</h1>
      <p>Página de checkout em desenvolvimento...</p>
    </div>
  `,
  styles: [`
    .checkout-container {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class CheckoutComponent {}
