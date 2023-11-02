interface IBookCard {
  id: string;
  author: string;
  authorId: string;
  title: string;
  synopsis: string;
  rating: number;
  reviewCount: number;
  cover?: string;
  tags: string[];
}

export default IBookCard;
