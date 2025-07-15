import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
