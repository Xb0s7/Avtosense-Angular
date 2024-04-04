import { Component, Input } from '@angular/core';

@Component({
  selector: 'service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  //add types
  @Input() service: any;
  clickHandler = () => {}
}
