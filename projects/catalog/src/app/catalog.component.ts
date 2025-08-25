import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'catalog-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  products = [
    { id: 1, name: 'Produto 1', price: 99.99, image: 'https://via.placeholder.com/200x200' },
    { id: 2, name: 'Produto 2', price: 149.99, image: 'https://via.placeholder.com/200x200' },
    { id: 3, name: 'Produto 3', price: 79.99, image: 'https://via.placeholder.com/200x200' },
    { id: 4, name: 'Produto 4', price: 199.99, image: 'https://via.placeholder.com/200x200' }
  ];
}
