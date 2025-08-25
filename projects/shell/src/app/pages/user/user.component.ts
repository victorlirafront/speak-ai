import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <div class="user-container">
      <h1>Minha Conta</h1>
      <p>Página do usuário em desenvolvimento...</p>
    </div>
  `,
  styles: [`
    .user-container {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class UserComponent {}
