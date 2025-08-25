import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  recentOrders = [
    { number: '001', date: '15/01/2024', total: 299.97, status: 'delivered', statusText: 'Entregue' },
    { number: '002', date: '10/01/2024', total: 149.99, status: 'pending', statusText: 'Em Processamento' },
    { number: '003', date: '05/01/2024', total: 89.99, status: 'cancelled', statusText: 'Cancelado' }
  ];
}
