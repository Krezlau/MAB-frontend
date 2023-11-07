interface ISearchableEntity {
  url: string;
  searchableProperty: string;
  description: string;
  rating?: number;
  reviewCount?: number;
  author: string;
  title?: string;
  id: string;
}

export default ISearchableEntity;
