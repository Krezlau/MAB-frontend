import { Component, Input, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import IBookCard from 'src/app/models/IBookCard';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
})
export class BookCatalogComponent {

  constructor() {}

  @Input() books: IBookCard[] | null = [];
}
