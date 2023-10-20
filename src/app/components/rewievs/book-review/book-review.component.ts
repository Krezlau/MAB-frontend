import { Component, Input } from '@angular/core';
import IBookReview from 'src/app/models/IBookReview';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html'
})
export class BookReviewComponent {
  @Input() review: IBookReview = {} as IBookReview;
}
