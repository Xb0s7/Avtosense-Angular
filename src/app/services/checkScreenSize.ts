import { Injectable, HostListener, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckWidthScreenService implements OnDestroy {
  private screenWidth: number;

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  isWidthGreaterThan(widthToCheck: number): boolean {
    return this.screenWidth > widthToCheck;
  }

  ngOnDestroy() {
    // Unsubscribe from the window resize event when the component is destroyed
    window.removeEventListener('resize', this.onResize);
  }
}