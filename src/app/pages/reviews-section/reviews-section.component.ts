import {
    AfterViewInit,
    CUSTOM_ELEMENTS_SCHEMA,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { REVIEWS } from '../../config/reviews-config';
import { SwiperOptions } from 'swiper/types';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { Review } from '../../shared/types/models';
import { CheckWidthScreenService } from '../../services/check-screen-service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'reviews-section',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './reviews-section.component.html',
    styleUrl: './reviews-section.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewsSectionComponent
    implements AfterViewInit, OnDestroy, OnInit
{
    reviews = REVIEWS;
    faArrow = faGreaterThan;
    @ViewChild('swiperContainer', { static: true })
    swiperContainer!: ElementRef;
    resizeSubscription: Subscription = new Subscription();
    showNavigation = true;
    
    showRating(review: Review): any[] {
        let stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push({
                id: Number(`review.rating` + i),
                filled: i < review.rating,
            });
        }

        return stars;
    }

    swiperParams: SwiperOptions = {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 20,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
        },
    };
    constructor(private checkScreenService: CheckWidthScreenService) {
        register();
    }

    ngAfterViewInit() {
        Object.assign(this.swiperContainer.nativeElement, this.swiperParams);
        this.swiperContainer.nativeElement.initialize();
    }

    ngOnInit(): void {
        this.showNavigation = this.checkScreenService.getWindowWidth() > 1024;
        this.resizeSubscription = this.checkScreenService
            .onResize()
            .subscribe(() => {
                this.showNavigation =
                    this.checkScreenService.getWindowWidth() > 1024; // Example condition, adjust as needed
            });
    }

    ngOnDestroy(): void {
        this.resizeSubscription.unsubscribe();
    }
}
