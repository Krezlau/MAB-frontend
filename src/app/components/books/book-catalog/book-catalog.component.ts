import { Component, Input } from '@angular/core';
import IBookCard from 'src/app/models/IBookCard';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
})
export class BookCatalogComponent {

  constructor() {}

  @Input() books: IBookCard[] | null = [];
  @Input() isLoading: boolean = false;
}
