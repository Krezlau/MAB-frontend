import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import IComment from 'src/app/models/IComment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent implements OnInit {
  @Input() reviewId: string = "";

  constructor(private commentService: CommentsService){}
  comments$: Observable<IComment[]> = new Observable;


  ngOnInit() {
    this.comments$ = this.commentService.getCommentsForReview(this.reviewId);
  }
}
