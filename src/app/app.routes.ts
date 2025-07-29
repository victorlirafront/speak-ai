import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { LoginComponent } from './components/login.component/login.component';
import { RegisterComponent } from './components/register.component/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];
