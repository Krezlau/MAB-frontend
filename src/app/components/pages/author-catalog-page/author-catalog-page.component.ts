import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import IAuthor from 'src/app/models/IAuthor';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-author-catalog-page',
  templateUrl: './author-catalog-page.component.html',
})
export class AuthorCatalogPageComponent {

  constructor(private authorsService: AuthorsService) {}

  authors$: Observable<IAuthor[]> = this.authorsService.getAuthors();
  isLoading$ = this.authorsService.isLoading;
}
