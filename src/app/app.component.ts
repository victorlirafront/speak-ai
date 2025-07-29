import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header.component/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // troque css por scss
})
export class AppComponent {}
