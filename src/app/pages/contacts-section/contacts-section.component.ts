import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CONTACT_ITEMS } from '../../config/contacts-config'
@Component({
  selector: 'contacts-section',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './contacts-section.component.html',
  styleUrl: './contacts-section.component.scss'
})
export class ContactsSectionComponent {
    contacts = CONTACT_ITEMS
    date = new Date().getFullYear();
    coordinates = {
      lat: 43.219859967929565,
      lng: 27.868800696550476,
  }
}
