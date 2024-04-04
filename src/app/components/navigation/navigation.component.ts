import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import  { NAVIGATION_ITEMS }  from '../../config/navigation-config'
@Component({
  selector: 'navigation',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
    faFb = faFacebookF;
    faCar = faCar
    mobileOpened = false;
    navigationItems = NAVIGATION_ITEMS

    scrollTo(id: string) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }

    closeMenuOnClick = () => {
        this.mobileOpened = !this.mobileOpened
    };

}
