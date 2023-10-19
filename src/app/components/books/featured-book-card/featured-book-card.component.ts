import { Component, Input } from '@angular/core';
import IBook from 'src/app/models/IBook';

@Component({
  selector: 'app-featured-book-card',
  templateUrl: './featured-book-card.component.html'
})
export class FeaturedBookCardComponent {
  @Input() book: IBook = {} as IBook;
}
