import { Component } from '@angular/core';
import { IntroSectionComponent } from './pages/intro-section/intro-section.component';
import { ReviewsSectionComponent } from './pages/reviews-section/reviews-section.component';
import { ContactsSectionComponent } from './pages/contacts-section/contacts-section.component';
import { ServicesSectionComponent } from './pages/services-section/services-section.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [IntroSectionComponent, ReviewsSectionComponent, ContactsSectionComponent, ServicesSectionComponent, NavigationComponent, HttpClientModule, SvgIconComponent],
})
export class AppComponent {
  constructor() {}
  title = 'Avtosense-Angular';
}
