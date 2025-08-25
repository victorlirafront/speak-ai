import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'checkout-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  orderItems = [
    { id: 1, name: 'Produto 1', price: 99.99, quantity: 2 },
    { id: 2, name: 'Produto 2', price: 149.99, quantity: 1 }
  ];

  get total(): number {
    return this.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
