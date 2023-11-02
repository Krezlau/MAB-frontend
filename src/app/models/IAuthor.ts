import IAuthorBook from "./IAuthorBook";

interface IAuthor {
  id: string;
  name: string;
  surname: string;
  about: string;
  photo?: string;
  books: IAuthorBook[];
}

export default IAuthor;
