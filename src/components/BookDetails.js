export default function BookDetails( {selectedId, onCloseBook} ) {
  
  return(
    <div className="details">
    <button onClick={onCloseBook}>&larr;</button>
      Book ID: {selectedId}
    </div>
  )
}