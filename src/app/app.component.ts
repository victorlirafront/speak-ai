import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // troque css por scss
})
export class AppComponent {}
