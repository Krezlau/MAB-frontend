import { Component } from '@angular/core';
import IBook from 'src/app/models/IBook';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
})
export class BookCatalogComponent {
  featured: IBook = {
    id: 'aaaaa',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  };
  books: IBook[] = [
    { id: 'bbbbb', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    {
      id: 'ccccc',
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
    },
    {
      id: 'ddddd',
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      id: 'eeeee',
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
    },
    {
      id: 'dddddd',
      title: 'Harry Potter and the Goblet of Fire',
      author: 'J.K. Rowling',
    },
    {
      id: 'ffffff',
      title: 'Harry Potter and the Order of the Phoenix',
      author: 'J.K. Rowling',
    },
    {
      id: 'jsadf',
      title: 'Harry Potter and the Half-Blood Prince',
      author: 'J.K. Rowling',
    },
    {
      id: 'jsdafajfdsa',
      title: 'Harry Potter and the Deathly Hallows',
      author: 'J.K. Rowling',
    },
    { id: 'jfsakdfa', title: 'The Da Vinci Code', author: 'Dan Brown' },
    { id: 'adfncvxm', title: 'Angels & Demons', author: 'Dan Brown' },
    {
      id: 'jfsdakfasdkfjasfasdf',
      title: 'The Lost Symbol',
      author: 'Dan Brown',
    },
  ];
}
