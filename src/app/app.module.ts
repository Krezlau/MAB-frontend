import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { BookDetailsPageComponent } from './components/pages/book-details-page/book-details-page.component';
import { BookRatingComponent } from './components/books/book-rating/book-rating.component';
import { BookReviewListComponent } from './components/rewievs/book-review-list/book-review-list.component';
import { BookReviewComponent } from './components/rewievs/book-review/book-review.component';
import { BookReviewFormComponent } from './components/rewievs/book-review-form/book-review-form.component';
import { BookReviewsCardComponent } from './components/rewievs/book-reviews-card/book-reviews-card.component';
import { AddBookReviewPageComponent } from './components/pages/add-book-review-page/add-book-review-page.component';
import { BookRatingFormComponent } from './components/books/book-rating-form/book-rating-form.component';
import { SignUpPageComponent } from './components/pages/sign-up-page/sign-up-page.component';
import { SignUpFormComponent } from './components/login/sign-up-form/sign-up-form.component';
import { AuthorListComponent } from './components/authors/author-list/author-list.component';
import { AuthorCardComponent } from './components/authors/author-card/author-card.component';
import { BookSearchFormComponent } from './components/books/book-search-form/book-search-form.component';
import { BookSearchResultsComponent } from './components/books/book-search-results/book-search-results.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import { MockBookCatalogComponent } from './components/books/mock-book-catalog/mock-book-catalog.component';
import { SearchableEntityCardComponent } from './components/search/searchable-entity-card/searchable-entity-card.component';
import { CommentListComponent } from './components/comments/comment-list/comment-list.component';
import { CommentsViewComponent } from './components/comments/comments-view/comments-view.component';
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';

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
    BookDetailsPageComponent,
    BookRatingComponent,
    BookReviewListComponent,
    BookReviewComponent,
    BookReviewFormComponent,
    BookReviewsCardComponent,
    AddBookReviewPageComponent,
    BookRatingFormComponent,
    SignUpPageComponent,
    SignUpFormComponent,
    AuthorListComponent,
    AuthorCardComponent,
    BookSearchFormComponent,
    BookSearchResultsComponent,
    BookDetailsComponent,
    MockBookCatalogComponent,
    SearchableEntityCardComponent,
    CommentListComponent,
    CommentsViewComponent,
    CommentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
