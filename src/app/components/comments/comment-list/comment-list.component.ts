import { Component, Input, OnInit } from '@angular/core';
import IComment from 'src/app/models/IComment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent {
  @Input() comments: IComment[] | null = [];
  @Input() isLoading: boolean = false;
}
