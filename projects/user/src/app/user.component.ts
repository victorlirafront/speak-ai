import { Component } from '@angular/core';

@Component({
  selector: 'user-root',
  standalone: true,
  template: `
    <div class="user-container">
      <h1>Minha Conta</h1>

      <div class="user-content">
        <div class="user-sidebar">
          <nav class="user-nav">
            <a href="#" class="nav-item active">Perfil</a>
            <a href="#" class="nav-item">Pedidos</a>
            <a href="#" class="nav-item">Endereços</a>
            <a href="#" class="nav-item">Favoritos</a>
            <a href="#" class="nav-item">Configurações</a>
          </nav>
        </div>

        <div class="user-main">
          <div class="profile-section">
            <h2>Informações Pessoais</h2>
            <form class="profile-form">
              <div class="form-row">
                <div class="form-group">
                  <label>Nome</label>
                  <input type="text" value="João Silva">
                </div>
                <div class="form-group">
                  <label>Sobrenome</label>
                  <input type="text" value="Santos">
                </div>
              </div>

              <div class="form-group">
                <label>Email</label>
                <input type="email" value="joao.silva@email.com">
              </div>

              <div class="form-group">
                <label>Telefone</label>
                <input type="tel" value="(11) 99999-9999">
              </div>

              <div class="form-group">
                <label>Data de Nascimento</label>
                <input type="date" value="1990-01-01">
              </div>

              <button type="submit" class="save-btn">Salvar Alterações</button>
            </form>
          </div>

          <div class="recent-orders">
            <h2>Pedidos Recentes</h2>
            <div class="orders-list">
              <div class="order-item" *ngFor="let order of recentOrders">
                <div class="order-header">
                  <span class="order-number">#{{ order.number }}</span>
                  <span class="order-status" [class]="order.status">{{ order.statusText }}</span>
                </div>
                <div class="order-details">
                  <p>{{ order.date }}</p>
                  <p>Total: R$ {{ order.total }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .user-container {
      padding: 20px;
    }

    .user-content {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 40px;
      margin-top: 20px;
    }

    .user-sidebar {
      background-color: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      height: fit-content;
    }

    .user-nav {
      display: flex;
      flex-direction: column;
    }

    .nav-item {
      padding: 12px 16px;
      text-decoration: none;
      color: #333;
      border-radius: 4px;
      margin-bottom: 8px;
      transition: background-color 0.3s;
    }

    .nav-item:hover,
    .nav-item.active {
      background-color: #3498db;
      color: white;
    }

    .user-main {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #ddd;
    }

    .profile-section {
      margin-bottom: 40px;
    }

    .profile-form {
      margin-top: 20px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    .form-group input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }

    .save-btn {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
    }

    .save-btn:hover {
      background-color: #2980b9;
    }

    .orders-list {
      margin-top: 20px;
    }

    .order-item {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 15px;
    }

    .order-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .order-number {
      font-weight: bold;
    }

    .order-status {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.9rem;
    }

    .order-status.pending {
      background-color: #f39c12;
      color: white;
    }

    .order-status.delivered {
      background-color: #27ae60;
      color: white;
    }

    .order-status.cancelled {
      background-color: #e74c3c;
      color: white;
    }
  `]
})
export class UserComponent {
  recentOrders = [
    { number: '001', date: '15/01/2024', total: 299.97, status: 'delivered', statusText: 'Entregue' },
    { number: '002', date: '10/01/2024', total: 149.99, status: 'pending', statusText: 'Em Processamento' },
    { number: '003', date: '05/01/2024', total: 89.99, status: 'cancelled', statusText: 'Cancelado' }
  ];
}
