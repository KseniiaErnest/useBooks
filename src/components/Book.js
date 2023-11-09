export default function Book( {book} ) {

  return(
    <li className="book-item">
      <div>📖</div>
      <div className="book-details">
      <h3>{book.title}</h3>
      <h4>{book.author_name}</h4>
      <h5>First publish year: {book.first_publish_year}</h5>
      </div>
    </li>
  )
}