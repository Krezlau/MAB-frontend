import { Component, Input } from '@angular/core';
import IBookCard from 'src/app/models/IBookCard';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html'
})
export class BookCardComponent {
  @Input() book: IBookCard | undefined;
  @Input() featured?: boolean;
}
