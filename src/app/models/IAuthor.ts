interface IAuthor {
  id: string;
  name: string;
  surname: string;
  about: string;
  photo: string;
  books: { id: string; title: string; }[];
}

export default IAuthor;
