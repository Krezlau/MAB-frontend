import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import ISearchableEntity from 'src/app/models/ISearchableEntity';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnDestroy {
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.sub = this.route.queryParams.subscribe((params) => {
      if (params['q']) {
        this.search(params['q']);
      }
    });
  }

  sub: Subscription = new Subscription();
  entities$: Observable<ISearchableEntity[]> = new Observable<
    ISearchableEntity[]
  >();
  isLoading = this.searchService.isLoading;

  search(searchTerm: string) {
    this.entities$ = this.searchService.search(searchTerm);
  }

  onSearch(searchTerm: string) {
    this.router.navigate(['search'], { queryParams: { q: searchTerm } });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
