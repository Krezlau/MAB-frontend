import IBookReview from "./IBookReview";

interface IBook {
  id: string;
  title: string;
  author: string;
  sinopsis: string;
  rating: number;
  reviews: IBookReview[];
  aboutAuthor: string;
  funFacts: string;
}

export default IBook;
