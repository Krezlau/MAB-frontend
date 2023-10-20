import { Component } from '@angular/core';
import IBook from 'src/app/models/IBook';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html'
})
export class BookDetailsPageComponent {
  book = {
    id: 'aaaaa',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    sinopsis: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/51%2B1s%2B1QF-L._SX331_BO1,204,203,200_.jpg',
    aboutAuthor: 'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic. He was the author of the high fantasy works The Hobbit and The Lord of the Rings.',
    rating: 4.5,
    funFacts: "Tolkien was an accomplished linguist and invented several languages, including what he called 'Elvish' or 'Middle-earth languages'.",

  }

}
