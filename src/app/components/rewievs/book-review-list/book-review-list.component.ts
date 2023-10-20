import { Component, Input } from '@angular/core';
import IBookReview from 'src/app/models/IBookReview';

@Component({
  selector: 'app-book-review-list',
  templateUrl: './book-review-list.component.html'
})
export class BookReviewListComponent {
  @Input() bookReviews: IBookReview[] = [];

  ngOnInit() {
    console.log(this.bookReviews);
  }
}
