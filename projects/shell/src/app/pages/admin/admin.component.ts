import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <div class="admin-container">
      <h1>Painel Administrativo</h1>
      <p>Página do admin em desenvolvimento...</p>
    </div>
  `,
  styles: [`
    .admin-container {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class AdminComponent {}
