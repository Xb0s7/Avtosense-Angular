import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckWidthScreenService {
  private resizeSubject: Subject<void> = new Subject<void>();

  constructor() {
    // Listen to window resize event
    window.addEventListener('resize', () => {
      this.resizeSubject.next();
    });
  }

  // Method to subscribe to resize events
  onResize(): Observable<void> {
    return this.resizeSubject.asObservable();
  }

  // Method to check window width
  getWindowWidth(): number {
    return window.innerWidth;
  }

}