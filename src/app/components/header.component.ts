// src/app/header/header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
  `,
  styles: [`
    header {
      background: #333;
      color: white;
      padding: 1rem;
    }
    nav a {
      color: white;
      margin-right: 1rem;
    }
  `]
})
export class HeaderComponent {
  title = 'Ecommerce';
}
