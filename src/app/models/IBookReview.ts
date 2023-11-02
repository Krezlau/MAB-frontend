interface IBookReview {
  id: string,
  userId: string,
  username: string,
  content: string,
  rating: number,
  commentsCount: number
}

export default IBookReview;
