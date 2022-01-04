import {GoogleBooksPreview} from './GoogleBooksPreview.jsx';

export function AddBookList({books, onAddBook}) {
  return (
    <ul className="add-book-list clean-list flex">
      {books.map(book => {
        return <GoogleBooksPreview onAddBook={onAddBook} key={book.id} book={book} />;
      })}
    </ul>
  );
}
