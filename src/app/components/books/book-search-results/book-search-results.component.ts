import { Component, Input } from '@angular/core';
import IBook from 'src/app/models/IBook';

@Component({
  selector: 'app-book-search-results',
  templateUrl: './book-search-results.component.html'
})
export class BookSearchResultsComponent {
  @Input() books: IBook[] = [];
}
