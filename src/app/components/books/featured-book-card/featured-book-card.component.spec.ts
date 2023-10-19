import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBookCardComponent } from './featured-book-card.component';

describe('FeaturedBookCardComponent', () => {
  let component: FeaturedBookCardComponent;
  let fixture: ComponentFixture<FeaturedBookCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedBookCardComponent]
    });
    fixture = TestBed.createComponent(FeaturedBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
