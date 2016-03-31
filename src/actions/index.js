export function selectBook(book) {
  //selectBook is an ActionCreator, it needs to return an ActionCreator
  //an object with a type property and sometimes contains a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
