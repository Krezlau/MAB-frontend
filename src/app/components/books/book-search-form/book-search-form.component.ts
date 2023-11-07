import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-search-form',
  templateUrl: './book-search-form.component.html'
})
export class BookSearchFormComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  @Input() q = '';
  searchControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);

  ngOnInit() {
    this.searchControl.setValue(this.q);
  }

  searchOnClick() {
    if (this.searchControl.valid && this.searchControl.value)
      this.search.emit(this.searchControl.value);
  };
}
