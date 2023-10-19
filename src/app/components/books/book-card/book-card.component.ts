import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html'
})
export class BookCardComponent {
  @Input() book: any;
}
