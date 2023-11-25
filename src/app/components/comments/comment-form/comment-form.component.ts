import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
})
export class CommentFormComponent {
  @Input() isLoading: boolean = false;
  @Output() submitComment: EventEmitter<string> = new EventEmitter<string>();
  contentControl = new FormControl('', Validators.required);
  isOpen: boolean = false;

  constructor(
    private alertService: AlertServiceService,
    private authService: AuthService,
  ) {}

  onSubmit() {
    if (this.contentControl.invalid || !this.contentControl.value) {
      this.alertService.show('Please enter a comment', 'error');
      return;
    }
    this.submitComment.emit(this.contentControl.value);
    this.contentControl.reset();
  }

  onCancel() {
    this.contentControl.reset();
    this.isOpen = false;
  }

  onShow() {
    if (!this.authService.getAuthState()().isLoggedIn) {
      this.alertService.show('Please log in to add a comment.', 'warning');
      return;
    }
    this.isOpen = true;
  }
}
