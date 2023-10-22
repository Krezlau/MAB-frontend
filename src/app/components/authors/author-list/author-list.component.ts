import { Component } from '@angular/core';
import IAuthor from 'src/app/models/IAuthor';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
})
export class AuthorListComponent {
  authors: IAuthor[] = [
    {
      id: '1',
      name: 'J. R. R.',
      surname: 'Tolkien',
      about: 'John Ronald Reuel Tolkien, CBE FRSL was an English writer, poet, philologist, and academic.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg/270px-J._R._R._Tolkien%2C_ca._1925.jpg',
      books: [
        { id: '1', title: 'The Hobbit' },
        { id: '2', title: 'The Lord of the Rings' },
        { id: '3', title: 'The Silmarillion' },
      ],
    },
    {
      id: '2',
      name: 'J. K.',
      surname: 'Rowling',
      about: 'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/440px-J._K._Rowling_2010.jpg',
      books: [
        { id: '4', title: 'Harry Potter and the Philosopher\'s Stone' },
        { id: '5', title: 'Harry Potter and the Chamber of Secrets' },
        { id: '6', title: 'Harry Potter and the Prisoner of Azkaban' },
        { id: '7', title: 'Harry Potter and the Goblet of Fire' },
        { id: '8', title: 'Harry Potter and the Order of the Phoenix' },
        { id: '9', title: 'Harry Potter and the Half-Blood Prince' },
        { id: '10', title: 'Harry Potter and the Deathly Hallows' },
      ],
    },
    {
      id: '3',
      name: 'George R. R.',
      surname: 'Martin',
      about: 'George Raymond Richard Martin, also known as GRRM, is an American novelist and short story writer, screenwriter, and television producer.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg/800px-Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg',
      books: [
        { id: '11', title: 'A Game of Thrones' },
        { id: '12', title: 'A Clash of Kings' },
        { id: '13', title: 'A Storm of Swords' },
        { id: '14', title: 'A Feast for Crows' },
        { id: '15', title: 'A Dance with Dragons' },
        { id: '16', title: 'The Winds of Winter' },
        { id: '17', title: 'A Dream of Spring' },
      ],
    },
  ];
}
