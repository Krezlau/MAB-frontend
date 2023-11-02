import { Component, Input } from '@angular/core';
import IBookDetails from 'src/app/models/IBookDetails';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent {
  @Input() book: IBookDetails | null | undefined;
}
