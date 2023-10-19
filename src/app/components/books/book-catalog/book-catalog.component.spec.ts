import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCatalogComponent } from './book-catalog.component';

describe('BookCatalogComponent', () => {
  let component: BookCatalogComponent;
  let fixture: ComponentFixture<BookCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCatalogComponent]
    });
    fixture = TestBed.createComponent(BookCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
