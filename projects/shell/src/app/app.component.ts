import { Component } from '@angular/core';
<<<<<<< Updated upstream:src/app/app.component.ts
import { HeaderComponent } from "./components/header.component/header.component";
import { RouterModule } from '@angular/router';
=======
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
>>>>>>> Stashed changes:projects/shell/src/app/app.component.ts

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream:src/app/app.component.ts
  imports: [HeaderComponent, RouterModule],
=======
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
>>>>>>> Stashed changes:projects/shell/src/app/app.component.ts
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'E-commerce Shell';
}
