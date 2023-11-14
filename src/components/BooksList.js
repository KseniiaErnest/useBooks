import Book from "./Book";

export default function BooksList({ books, onSelectBook }) {

  return (
    <ul className="books-list">
      {books.map((book) => (
        <Book book={book} key={book.title} onSelectBook={onSelectBook}/>
      ))}
    </ul>
  )
}