import Book from "./Book";

export default function BooksList({ books }) {

  return (
    <ul className="books-list">
      {books.map((book) => (
        <Book book={book} key={book.title} />
      ))}
    </ul>
  )
}