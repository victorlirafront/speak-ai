import { Component } from '@angular/core';

@Component({
  selector: 'admin-root',
  standalone: true,
  template: `
    <div class="admin-container">
      <h1>Painel Administrativo</h1>

      <div class="admin-content">
        <div class="admin-sidebar">
          <nav class="admin-nav">
            <a href="#" class="nav-item active">Dashboard</a>
            <a href="#" class="nav-item">Produtos</a>
            <a href="#" class="nav-item">Pedidos</a>
            <a href="#" class="nav-item">Clientes</a>
            <a href="#" class="nav-item">Relatórios</a>
            <a href="#" class="nav-item">Configurações</a>
          </nav>
        </div>

        <div class="admin-main">
          <div class="dashboard-stats">
            <div class="stat-card">
              <h3>Total de Vendas</h3>
              <p class="stat-value">R$ 45.230,00</p>
              <span class="stat-change positive">+12%</span>
            </div>
            <div class="stat-card">
              <h3>Pedidos</h3>
              <p class="stat-value">156</p>
              <span class="stat-change positive">+8%</span>
            </div>
            <div class="stat-card">
              <h3>Clientes</h3>
              <p class="stat-value">1.234</p>
              <span class="stat-change positive">+15%</span>
            </div>
            <div class="stat-card">
              <h3>Produtos</h3>
              <p class="stat-value">89</p>
              <span class="stat-change neutral">0%</span>
            </div>
          </div>

          <div class="recent-orders">
            <h2>Pedidos Recentes</h2>
            <table class="orders-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cliente</th>
                  <th>Produtos</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let order of recentOrders">
                  <td>#{{ order.id }}</td>
                  <td>{{ order.customer }}</td>
                  <td>{{ order.items }} itens</td>
                  <td>R$ {{ order.total }}</td>
                  <td>
                    <span class="status-badge" [class]="order.status">{{ order.statusText }}</span>
                  </td>
                  <td>
                    <button class="action-btn">Ver</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="product-management">
            <h2>Gerenciar Produtos</h2>
            <button class="add-product-btn">+ Adicionar Produto</button>
            <table class="products-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Estoque</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let product of products">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>R$ {{ product.price }}</td>
                  <td>{{ product.stock }}</td>
                  <td>
                    <span class="status-badge" [class]="product.status">{{ product.statusText }}</span>
                  </td>
                  <td>
                    <button class="action-btn">Editar</button>
                    <button class="action-btn delete">Excluir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-container {
      padding: 20px;
    }

    .admin-content {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 40px;
      margin-top: 20px;
    }

    .admin-sidebar {
      background-color: #2c3e50;
      padding: 20px;
      border-radius: 8px;
      height: fit-content;
    }

    .admin-nav {
      display: flex;
      flex-direction: column;
    }

    .nav-item {
      padding: 12px 16px;
      text-decoration: none;
      color: white;
      border-radius: 4px;
      margin-bottom: 8px;
      transition: background-color 0.3s;
    }

    .nav-item:hover,
    .nav-item.active {
      background-color: #34495e;
    }

    .admin-main {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #ddd;
    }

    .dashboard-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .stat-card {
      background-color: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #2c3e50;
      margin: 10px 0;
    }

    .stat-change {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.9rem;
    }

    .stat-change.positive {
      background-color: #27ae60;
      color: white;
    }

    .stat-change.neutral {
      background-color: #95a5a6;
      color: white;
    }

    .orders-table,
    .products-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    .orders-table th,
    .orders-table td,
    .products-table th,
    .products-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    .orders-table th,
    .products-table th {
      background-color: #f8f9fa;
      font-weight: bold;
    }

    .status-badge {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.9rem;
    }

    .status-badge.pending {
      background-color: #f39c12;
      color: white;
    }

    .status-badge.processing {
      background-color: #3498db;
      color: white;
    }

    .status-badge.shipped {
      background-color: #9b59b6;
      color: white;
    }

    .status-badge.delivered {
      background-color: #27ae60;
      color: white;
    }

    .status-badge.active {
      background-color: #27ae60;
      color: white;
    }

    .status-badge.inactive {
      background-color: #e74c3c;
      color: white;
    }

    .action-btn {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 5px;
    }

    .action-btn.delete {
      background-color: #e74c3c;
    }

    .add-product-btn {
      background-color: #27ae60;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 20px;
    }
  `]
})
export class AdminComponent {
  recentOrders = [
    { id: '001', customer: 'João Silva', items: 3, total: 299.97, status: 'pending', statusText: 'Pendente' },
    { id: '002', customer: 'Maria Santos', items: 1, total: 149.99, status: 'processing', statusText: 'Processando' },
    { id: '003', customer: 'Pedro Costa', items: 2, total: 199.98, status: 'shipped', statusText: 'Enviado' },
    { id: '004', customer: 'Ana Oliveira', items: 4, total: 399.96, status: 'delivered', statusText: 'Entregue' }
  ];

  products = [
    { id: 1, name: 'Produto A', price: 99.99, stock: 50, status: 'active', statusText: 'Ativo' },
    { id: 2, name: 'Produto B', price: 149.99, stock: 25, status: 'active', statusText: 'Ativo' },
    { id: 3, name: 'Produto C', price: 79.99, stock: 0, status: 'inactive', statusText: 'Inativo' },
    { id: 4, name: 'Produto D', price: 199.99, stock: 10, status: 'active', statusText: 'Ativo' }
  ];
}
