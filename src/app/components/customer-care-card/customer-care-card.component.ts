import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { CustomerCareCard } from '../../shared/types/models';

@Component({
  selector: 'customer-care-card',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './customer-care-card.component.html',
  styleUrl: './customer-care-card.component.scss',
})
export class CustomerCareCardComponent implements OnChanges{
  @Input() card:CustomerCareCard | null = null;
  options:AnimationOptions | null = null;
  styles: Partial<CSSStyleDeclaration> = {}
  ngOnChanges() {
    this.createOptions()
  }
  
  private createOptions () {
    this.options = {
      path: this.card?.lottie
    };
    
    this.styles = {...this.card?.styles}
  }
}
