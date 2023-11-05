import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-catalog-page',
  templateUrl: './book-catalog-page.component.html',
  styleUrls: ['./book-catalog-page.component.css']
})
export class BookCatalogPageComponent {

  constructor(private booksService: BooksService) {

  }

  books$ = this.booksService.getBooks();
  isLoading$ = this.booksService.isLoading();
}
