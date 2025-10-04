import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  // Social media links
  socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' }
  ];

  // Quick links
  quickLinks = [
    { name: 'Sobre o Speak AI', url: '/about' },
    { name: 'Contato', url: '/contact' },
    { name: 'Política de Privacidade', url: '/privacy' },
    { name: 'Termos de Uso', url: '/terms' }
  ];

  // Learning resources
  learningResources = [
    { name: 'Central de Ajuda', url: '/help' },
    { name: 'Como Usar', url: '/how-to-use' },
    { name: 'Dicas de Estudo', url: '/study-tips' },
    { name: 'FAQ', url: '/faq' }
  ];

  // Study categories
  studyCategories = [
    { name: 'Vocabulário', url: '/category/vocabulary' },
    { name: 'Gramática', url: '/category/grammar' },
    { name: 'Expressões', url: '/category/expressions' },
    { name: 'Conversação', url: '/category/conversation' }
  ];
}
