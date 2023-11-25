import { Component, EventEmitter, Input, OnDestroy, Output, Signal, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import IComment from 'src/app/models/IComment';
import ICommentCreate from 'src/app/models/ICommentCreate';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html'
})
export class CommentsViewComponent implements OnDestroy {
  @Input() reviewId: string = "";
  @Output() commentAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(private commentService: CommentsService){}
  comments$: Observable<IComment[]> = new Observable;
  isLoading: Signal<boolean> = signal(false);
  sub: Subscription = new Subscription();

  ngOnInit() {
    this.comments$ = this.commentService.getCommentsForReview(this.reviewId);
    this.isLoading = this.commentService.isLoading;
  }

  onSubmit(comment: string) {
    const commentEntity: ICommentCreate = {
      reviewId: this.reviewId,
      content: comment
    }
    this.sub.add(this.commentService.addComment(commentEntity).subscribe());
    // this is a hack haha
    setTimeout(() => {this.comments$ = this.commentService.getCommentsForReview(this.reviewId);}, 200);
    this.commentAdded.emit();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
