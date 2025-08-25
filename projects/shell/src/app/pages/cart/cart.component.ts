import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="cart-container">
      <h1>Carrinho de Compras</h1>
      <div class="cart-items" *ngIf="cartItems.length > 0; else emptyCart">
        <div class="cart-item" *ngFor="let item of cartItems">
          <img [src]="item.image" [alt]="item.name">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="price">R$ {{ item.price }}</p>
            <div class="quantity-controls">
              <button (click)="decreaseQuantity(item)">-</button>
              <span>{{ item.quantity }}</span>
              <button (click)="increaseQuantity(item)">+</button>
            </div>
          </div>
          <button class="remove-item" (click)="removeItem(item)">Remover</button>
        </div>
        <div class="cart-summary">
          <h3>Total: R$ {{ total }}</h3>
          <button class="checkout-btn">Finalizar Compra</button>
        </div>
      </div>
      <ng-template #emptyCart>
        <div class="empty-cart">
          <p>Seu carrinho está vazio</p>
          <button routerLink="/catalog">Continuar Comprando</button>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .cart-container {
      padding: 20px;
    }
    
    .cart-items {
      margin-top: 20px;
    }
    
    .cart-item {
      display: flex;
      align-items: center;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 15px;
    }
    
    .cart-item img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 4px;
      margin-right: 15px;
    }
    
    .item-details {
      flex: 1;
    }
    
    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    }
    
    .quantity-controls button {
      background-color: #3498db;
      color: white;
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .remove-item {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .cart-summary {
      border-top: 2px solid #ddd;
      padding-top: 20px;
      text-align: right;
    }
    
    .checkout-btn {
      background-color: #27ae60;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1.1rem;
    }
    
    .empty-cart {
      text-align: center;
      padding: 40px;
    }
    
    .empty-cart button {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class CartComponent {
  cartItems = [
    { id: 1, name: 'Produto 1', price: 99.99, quantity: 2, image: 'https://via.placeholder.com/80x80' },
    { id: 2, name: 'Produto 2', price: 149.99, quantity: 1, image: 'https://via.placeholder.com/80x80' }
  ];

  get total(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }
}
