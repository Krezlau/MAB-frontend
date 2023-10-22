import { Component } from '@angular/core';
import IBook from 'src/app/models/IBook';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  books: IBook[] = [
    {
      id: 'bbbbb',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',

      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
    },
    {
      id: 'ccccc',
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
    },
    {
      id: 'ddddd',
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
    },
    {
      id: 'eeeee',
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
    },
    {
      id: 'dddddd',
      title: 'Harry Potter and the Goblet of Fire',
      author: 'J.K. Rowling',
      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
    },
    {
      id: 'ffffff',
      title: 'Harry Potter and the Order of the Phoenix',
      author: 'J.K. Rowling',
      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
    },
    {
      id: 'jsadf',
      title: 'Harry Potter and the Half-Blood Prince',
      author: 'J.K. Rowling',
      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
    },
    {
      id: 'jsdafajfdsa',
      title: 'Harry Potter and the Deathly Hallows',
      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
      author: 'J.K. Rowling',
    },
    {
      id: 'jfsakdfa',
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
    },
    {
      id: 'adfncvxm',
      title: 'Angels & Demons',
      author: 'Dan Brown',

      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
    },
    {
      id: 'jfsdakfasdkfjasfasdf',
      title: 'The Lost Symbol',
      author: 'Dan Brown',
      aboutAuthor:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
      sinopsis:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      rating: 5,
      reviews: [],
      funFacts:
        'The Lord of the Rings is the third-best-selling novel ever written, with over 150 million copies sold.',
    },
  ];
}
