import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCatalogPageComponent } from './components/pages/book-catalog-page/book-catalog-page.component';
import { AuthorCatalogPageComponent } from './components/pages/author-catalog-page/author-catalog-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { BookCatalogComponent } from './components/books/book-catalog/book-catalog.component';
import { BookCardComponent } from './components/books/book-card/book-card.component';
import { FeaturedBookCardComponent } from './components/books/featured-book-card/featured-book-card.component';
import { BookDetailsPageComponent } from './components/pages/book-details-page/book-details-page.component';
import { BookRatingComponent } from './components/books/book-rating/book-rating.component';
import { BookReviewListComponent } from './components/rewievs/book-review-list/book-review-list.component';
import { BookReviewComponent } from './components/rewievs/book-review/book-review.component';
import { BookReviewFormComponent } from './components/rewievs/book-review-form/book-review-form.component';
import { BookReviewsCardComponent } from './components/rewievs/book-reviews-card/book-reviews-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCatalogPageComponent,
    AuthorCatalogPageComponent,
    SearchPageComponent,
    NotFoundPageComponent,
    HomePageComponent,
    LoginPageComponent,
    LoginFormComponent,
    BookCatalogComponent,
    BookCardComponent,
    FeaturedBookCardComponent,
    BookDetailsPageComponent,
    BookRatingComponent,
    BookReviewListComponent,
    BookReviewComponent,
    BookReviewFormComponent,
    BookReviewsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
