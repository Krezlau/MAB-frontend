import { Component } from '@angular/core';
import IBook from 'src/app/models/IBook';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
})
export class BookDetailsPageComponent {
  book: IBook = {
    id: 'aaaaa',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    sinopsis:
      "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.",
    aboutAuthor:
      'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic. He was the author of the high fantasy works The Hobbit and The Lord of the Rings.',
    rating: 4.5,
    funFacts:
      "Tolkien was an accomplished linguist and invented several languages, including what he called 'Elvish' or 'Middle-earth languages'.",
    reviews: [
      {
        id: 'aaaaa',
        username: 'John Doe',
        rating: 4.5,
        content: 'This is a great book! I really enjoyed it.',
      },
      {
        id: 'bbbbb',
        username: 'Jane Doe',
        rating: 5,
        content: 'This is a great book! I really enjoyed it.',
      },
      {
        id: 'ccccc',
        username: 'John Smith',
        rating: 3,
        content: 'I did not like this book.',
      },
      {
        id: 'ddddd',
        username: 'Jane Smith',
        rating: 4,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie felis finibus enim feugiat, quis finibus eros mollis. Nulla facilisi. Pellentesque luctus neque quis magna iaculis ultrices. Etiam eget mi eget sapien volutpat viverra ut at velit. Vivamus elementum erat est, ac scelerisque purus ultricies suscipit. Nullam non viverra nisl. Morbi ut enim ut erat fringilla tempor. Nunc nec turpis lectus. Ut vel efficitur ipsum. Maecenas sapien quam, laoreet at lacus sed, dapibus pretium neque. Suspendisse placerat at nibh quis eleifend.',
      },
    ],
  };
}
