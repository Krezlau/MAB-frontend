interface IBookDetails {
  id: string;
  author: string;
  authorId: string;
  aboutAuthor: string;
  title: string;
  synopsis: string;
  funFacts: string;
  rating: number;
  cover?: string;
  tags: string[];
}

export default IBookDetails;
