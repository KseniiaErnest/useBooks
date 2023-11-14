export default function ReadBooksList({readBooks} ) {

  return (
    <div>

  <ul className="books-list">
  {readBooks.map((book) => (
    <li key={book.key} className="book-item">
   
    <img src={book.cover} alt={book.title} />

      <div className="book-details flex">
      <div>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <h5>{book.genre}</h5>
</div>
      <button className="btn-close-book">X</button>
      
      </div>

      
    </li>
    ))}
  </ul>

    </div>
  )
}