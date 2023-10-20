import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-reviews-card',
  templateUrl: './book-reviews-card.component.html'
})
export class BookReviewsCardComponent {
  @Input() book: any;
}
