interface IBookCard {
  id: string;
  author: string;
  authorId: string;
  title: string;
  synopsis: string;
  rating: number;
  cover?: string;
  tags: string[];
}

export default IBookCard;
