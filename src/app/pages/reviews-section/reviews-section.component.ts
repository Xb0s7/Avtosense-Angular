import {
    AfterViewInit,
    CUSTOM_ELEMENTS_SCHEMA,
    Component,
    ElementRef,
    ViewChild,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { REVIEWS } from '../../config/reviews-config';
import { SwiperOptions } from 'swiper/types';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { Review } from '../../shared/types/models';

@Component({
    selector: 'reviews-section',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './reviews-section.component.html',
    styleUrl: './reviews-section.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewsSectionComponent implements AfterViewInit {
    reviews = REVIEWS;
    faArrow = faGreaterThan;
    @ViewChild('swiperContainer', { static: true })
    swiperContainer!: ElementRef;

    showRating(review: Review ): any[] {
      let stars = [];
  
      for (let i = 0; i < 5; i++) {
        stars.push({id: Number(`review.rating` + i), filled: i < review.rating });
      }
  
      return stars;
    }

    swiperParams: SwiperOptions = {
        loop: true,
        slidesPerView: 3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 20,
    };
    constructor() {
        register();
    }

    ngAfterViewInit() {
        Object.assign(this.swiperContainer.nativeElement, this.swiperParams);
        this.swiperContainer.nativeElement.initialize();
    }
}
