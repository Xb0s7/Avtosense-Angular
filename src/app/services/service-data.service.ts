import { Injectable } from '@angular/core';
import { ServiceDetails } from '../shared/types/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ServiceDataService {
    isActiveSubject$ = new BehaviorSubject<boolean>(false);
    selectedService$ = new BehaviorSubject<ServiceDetails | null>(null);

    constructor() {
        console.log('ServiceDataService constructor called');
    }

    setIsActive(isActive: boolean) {
        this.isActiveSubject$.next(isActive); // Call next() on the BehaviorSubject
    }

    setSelectedService(newSelectedService: ServiceDetails | null) {
        this.selectedService$.next(newSelectedService); // Call next() on the BehaviorSubject
    }
}
