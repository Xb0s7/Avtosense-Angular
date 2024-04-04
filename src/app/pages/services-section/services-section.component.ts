import { Component } from '@angular/core';
import { SERVICES_ITEMS } from '../../config/services-config';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'services-section',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
    services = SERVICES_ITEMS
}
