import { Component } from '@angular/core';
import { CustomerCareCardComponent } from '../../components/customer-care-card/customer-care-card.component';
import CUSTOMER_CARE_CARDS from '../../config/lotties';

@Component({
  selector: 'customer-care-section',
  standalone: true,
  imports: [CustomerCareCardComponent],
  templateUrl: './customer-care-section.component.html',
  styleUrl: './customer-care-section.component.scss'
})
export class CustomerCareSectionComponent {
    cards = CUSTOMER_CARE_CARDS
}
