import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCatalogPageComponent } from './book-catalog-page.component';

describe('BookCatalogPageComponent', () => {
  let component: BookCatalogPageComponent;
  let fixture: ComponentFixture<BookCatalogPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCatalogPageComponent]
    });
    fixture = TestBed.createComponent(BookCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
