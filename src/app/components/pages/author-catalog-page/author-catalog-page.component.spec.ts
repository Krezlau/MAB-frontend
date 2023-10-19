import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCatalogPageComponent } from './author-catalog-page.component';

describe('AuthorCatalogPageComponent', () => {
  let component: AuthorCatalogPageComponent;
  let fixture: ComponentFixture<AuthorCatalogPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorCatalogPageComponent]
    });
    fixture = TestBed.createComponent(AuthorCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
