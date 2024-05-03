import Book from "../components/book/Book.js";

function BookCase({ booksProps }) {
  return (
    <div className="booklist">
      <h1>List of Books</h1>
      {booksProps.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))}
    </div>
  );
}

export default BookCase;

//click on book
