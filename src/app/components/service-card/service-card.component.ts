import { Component, HostListener, Input } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';

@Component({
  selector: 'service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() service: any;
  
  constructor(private serviceDataService: ServiceDataService) {}
  @HostListener('click')
  onCardClick = () => {
      this.serviceDataService.setIsActive(true);
      this.serviceDataService.setSelectedService(this.service);
  }
}
