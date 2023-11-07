import { Component, Input } from '@angular/core';
import ISearchableEntity from 'src/app/models/ISearchableEntity';

@Component({
  selector: 'app-book-search-results',
  templateUrl: './book-search-results.component.html'
})
export class BookSearchResultsComponent {
  @Input() entities: ISearchableEntity[] | null = [];
  @Input() loading = false;
}
