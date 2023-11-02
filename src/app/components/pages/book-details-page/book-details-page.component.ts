import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import IBookDetails from 'src/app/models/IBookDetails';
import IBookReview from 'src/app/models/IBookReview';
import { BooksService } from 'src/app/services/books.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
})
export class BookDetailsPageComponent implements OnInit {
  constructor(
    private booksService: BooksService,
    private reviewsService: ReviewsService,
    private route: ActivatedRoute,
  ) {}
  book$: Observable<IBookDetails> | undefined;
  reviews$: Observable<IBookReview[]> | undefined;

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (!bookId) {
      console.log('No book id');
      return;
    }
    this.book$ = this.booksService.getBookById(bookId);

    // fetch reviews and rating for this book (reviewsService)
    this.reviews$ = this.reviewsService.getReviewsForBook(bookId);
  }
}
