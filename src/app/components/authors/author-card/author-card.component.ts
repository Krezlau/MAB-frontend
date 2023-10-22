import { Component, Input } from '@angular/core';
import IAuthor from 'src/app/models/IAuthor';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html'
})
export class AuthorCardComponent {
  @Input() author: IAuthor = {} as IAuthor;
}
