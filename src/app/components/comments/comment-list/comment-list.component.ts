import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import IComment from 'src/app/models/IComment';
import { AuthService } from 'src/app/services/auth.service';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
})
export class CommentListComponent {
  @Input() comments: IComment[] | null = [];
  @Input() isLoading: boolean = false;
  @Output() onCommentDelete: EventEmitter<void> = new EventEmitter<void>();

  username: string = '';
  sub: Subscription = new Subscription();

  constructor(authService: AuthService, private commentService: CommentsService) {
    this.username = authService.getAuthState()().username;
  }

  deleteComment(id: string) {
    this.sub.add(this.commentService.deleteComment(id).subscribe((result) => {
      if (!this.comments) return;
      this.comments = this.comments?.filter((comment) => comment.id !== id);
      this.onCommentDelete.emit();
    }));
  }
}
