import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html'
})
export class BookRatingComponent {
  @Input() rating: number = 0;
  @Input() reviewCount?: number;
  @Input() showReviewCount?: boolean = false;
}
