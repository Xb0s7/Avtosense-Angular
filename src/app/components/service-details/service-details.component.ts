import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'service-details',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {
  faTimes = faTimes
  // set
  // onCloseClick = () => { setIsActive(false);
  //   setSelectedService(null)
}
