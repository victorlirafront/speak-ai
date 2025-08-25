import { Component } from '@angular/core';

@Component({
  selector: 'catalog-root',
  standalone: true,
  template: `
    <div class="catalog-container">
      <h1>Catálogo de Produtos</h1>
      <div class="products-grid">
        <div class="product-card" *ngFor="let product of products">
          <img [src]="product.image" [alt]="product.name">
          <h3>{{ product.name }}</h3>
          <p class="price">R$ {{ product.price }}</p>
          <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .catalog-container {
      padding: 20px;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .product-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      text-align: center;
    }

    .product-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
    }

    .price {
      font-size: 1.2rem;
      font-weight: bold;
      color: #2c3e50;
    }

    .add-to-cart {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }

    .add-to-cart:hover {
      background-color: #2980b9;
    }
  `]
})
export class CatalogComponent {
  products = [
    { id: 1, name: 'Produto 1', price: 99.99, image: 'https://via.placeholder.com/200x200' },
    { id: 2, name: 'Produto 2', price: 149.99, image: 'https://via.placeholder.com/200x200' },
    { id: 3, name: 'Produto 3', price: 79.99, image: 'https://via.placeholder.com/200x200' },
    { id: 4, name: 'Produto 4', price: 199.99, image: 'https://via.placeholder.com/200x200' }
  ];
}
