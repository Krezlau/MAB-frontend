import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { BookCatalogPageComponent } from './components/pages/book-catalog-page/book-catalog-page.component';
import { AuthorCatalogPageComponent } from './components/pages/author-catalog-page/author-catalog-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { BookDetailsPageComponent } from './components/pages/book-details-page/book-details-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'book-catalog',
    component: BookCatalogPageComponent,
    pathMatch: 'full',
  },
  { path: 'author-catalog', component: AuthorCatalogPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'book-catalog/:id', component: BookDetailsPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
