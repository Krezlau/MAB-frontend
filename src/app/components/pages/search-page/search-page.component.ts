import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import ISearchableEntity from 'src/app/models/ISearchableEntity';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {

  constructor(private searchService: SearchService) {}

  entities$: Observable<ISearchableEntity[]> = new Observable<ISearchableEntity[]>();
  isLoading = this.searchService.isLoading;

  onSearch(searchTerm: string) {
    this.entities$ = this.searchService.search(searchTerm);
  }
}
