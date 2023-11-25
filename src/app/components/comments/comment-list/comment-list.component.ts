import { Component, Input, OnInit } from '@angular/core';
import IComment from 'src/app/models/IComment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
})
export class CommentListComponent {
  @Input() comments: IComment[] | null = [];
  @Input() isLoading: boolean = false;

  username: string = '';

  constructor(authService: AuthService) {
    this.username = authService.getAuthState()().username;
  }

  deleteComment(id: string) {
  }
}
