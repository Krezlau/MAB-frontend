import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-search-form',
  templateUrl: './book-search-form.component.html'
})
export class BookSearchFormComponent {
  @Output() search = new EventEmitter<string>();
  searchControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);

  searchOnClick() {
    if (this.searchControl.valid && this.searchControl.value)
      this.search.emit(this.searchControl.value);
  };
}
