import { Component, Input } from '@angular/core';
import IAuthor from 'src/app/models/IAuthor';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
})
export class AuthorListComponent {
  @Input() authors: IAuthor[] | null = [];
}
