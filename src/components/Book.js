export default function Book( {book} ) {

  return(
    <li className="book-item">
      <img src={book.cover} alt={book.title} />
      <div className="book-details">
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <h5>{book.genre}</h5>
      </div>
    </li>
  )
}