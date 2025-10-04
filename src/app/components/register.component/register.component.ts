import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    console.log('Register attempt:', this.registerData);
    // Aqui você implementaria a lógica de cadastro
  }
}
