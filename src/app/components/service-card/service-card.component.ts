import { Component, Input } from '@angular/core';
import { NgxSvgModule } from 'ngx-svg';
@Component({
  selector: 'service-card',
  standalone: true,
  imports: [NgxSvgModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  //add types
  @Input() service: any;
  clickHandler = () => {}
}
