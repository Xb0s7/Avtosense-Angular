import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ServiceDataService } from '../../services/service-data.service';
import { ServiceDetails } from '../../shared/types/models';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'service-details',
    standalone: true,
    imports: [FontAwesomeModule, CommonModule],
    templateUrl: './service-details.component.html',
    styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent implements OnInit, OnDestroy {
    @ViewChild('details') serviceDetailsRef!: ElementRef;

    faTimes = faTimes;
    faCheck = faCheckCircle;
    selectedService$: Observable<ServiceDetails | null>;
    isActive$: Observable<boolean>;
    private isActiveSubscription: Subscription | undefined;

    scrollPositionToReturn = 0;

    constructor(private serviceDataService: ServiceDataService) {
        this.isActive$ = this.serviceDataService.isActiveSubject$;
        this.selectedService$ = this.serviceDataService.selectedService$;
    }

    onCloseClick = () => {
        this.serviceDataService.setIsActive(false);
        this.serviceDataService.setSelectedService(null);
    };

    ngOnInit(): void {
        this.isActiveSubscription = this.isActive$.subscribe((value) => {
            // Call your function with the new value
            this.scroll(value);
        });
    }

    ngOnDestroy(): void {
        // Unsubscribe to prevent memory leaks
        this.isActiveSubscription?.unsubscribe();
    }

    scroll(isActive: boolean) {
        if (this.serviceDetailsRef && isActive) {
            this.scrollPositionToReturn = window.scrollY;
            this.serviceDetailsRef.nativeElement.classList.add('active');
            const timer = setTimeout(() => {
                this.serviceDetailsRef.nativeElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }, 210);

            return () => clearTimeout(timer);
        } else {
            this.serviceDetailsRef?.nativeElement.classList.remove('active');
            window.scrollTo({
                top: this.scrollPositionToReturn,
                behavior: 'smooth',
            });
        }
    }
}
