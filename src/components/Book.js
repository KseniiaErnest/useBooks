export default function Book( {book, onSelectBook} ) {

  return(
    <li  className="book-item hover" onClick={() => onSelectBook(book.key)}>
      <div>📖</div>
      <div className="book-details">
      <h3>{book.title}</h3>
      <h4>{book.author_name}</h4>
      <h5>First publish year: {book.first_publish_year}</h5>
      </div>
    </li>
  )
}