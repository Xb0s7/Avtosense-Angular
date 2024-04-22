import { Component } from '@angular/core';
import { SERVICES_ITEMS } from '../../config/services-config';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { ServiceDetailsComponent } from '../../components/service-details/service-details.component';
import { ServiceDetails } from '../../shared/types/models';
import { Observable } from 'rxjs';
import { ServiceDataService } from '../../services/service-data.service';

@Component({
  selector: 'services-section',
  standalone: true,
  imports: [ServiceCardComponent, ServiceDetailsComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
    services = SERVICES_ITEMS
    selectedService$: Observable<ServiceDetails | null>;
    isActive$: Observable<boolean>;

  constructor(private serviceDataService: ServiceDataService) {
    this.isActive$ = this.serviceDataService.isActiveSubject$;
    this.selectedService$ = this.serviceDataService.selectedService$;
  }
}
