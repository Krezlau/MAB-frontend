import { Component } from '@angular/core';
import IBook from 'src/app/models/IBook';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
})
export class BookCatalogComponent {
  featured: IBook = {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  };
  books: IBook[] = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
    },
    { title: 'Harry Potter and the Goblet of Fire', author: 'J.K. Rowling' },
    {
      title: 'Harry Potter and the Order of the Phoenix',
      author: 'J.K. Rowling',
    },
    { title: 'Harry Potter and the Half-Blood Prince', author: 'J.K. Rowling' },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K. Rowling' },
    { title: 'The Da Vinci Code', author: 'Dan Brown' },
    { title: 'Angels & Demons', author: 'Dan Brown' },
    { title: 'The Lost Symbol', author: 'Dan Brown' },
  ];
}
