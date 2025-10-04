import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Login attempt:', this.loginData);
    // Aqui você implementaria a lógica de autenticação
  }

  loginWithGoogle() {
    console.log('Google login attempt');
    // Aqui você implementaria a lógica de autenticação com Google
  }
}
