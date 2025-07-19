import { Component } from '@angular/core';
import { ANCORA_LOGO } from '../../../constants/IMAGES';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  logo = ANCORA_LOGO;
}
