import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Box from "./components/Box";
import { useEffect, useState } from "react";
import BooksList from "./components/BooksList";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import Error from "./components/Error";
import ReadBooksSummary from "./components/ReadBooksSummary";
import ReadBooksList from "./components/ReadBooksList";
import BookDetails from "./components/BookDetails";

const tempBooksData = [
  {
  title: "The Great Gatsby", 
  author: "F. Scott Fitzgerald", 
  genre: "Classic",
  cover: 'https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1',
},
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee", 
    genre: "Fiction",
    cover: 'https://www.bfbooks.com/core/media/media.nl?id=67767&c=426867&h=nNVZ9DvLWREuPsqHynWg7HyKhFSC5kK-HyrWr-8b2cAIuqAY',
  },
  {
    title: "1984",
     author: "George Orwell",
      genre: "Dystopian",
      cover: 'https://images.booksense.com/images/333/869/9781328869333.jpg',
    }
]

const tempReadBooks = [
  {
    title: "Pride and Prejudice",
     author: "Jane Austen",
      genre: "Romance",
      cover: 'https://theperksofbeingnourablog.files.wordpress.com/2021/01/pride-and-prejudice-barnes-noble-collectible-editions-1.jpg',
      key: 1,
    },
  {
    title: "The Catcher in the Rye",
     author: "J.D. Salinger",
      genre: "Coming-of-age",
      cover: 'https://media.npr.org/assets/artslife/books/2009/10/catcher_custom-853c2f7a4f9f9acaa8647dfdc7b9796555ad54a2-s1100-c50.jpg',
      key: 2,
    }
]

// const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`);

export default function App() {

  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');

  const [readBooks, setReadBooks] = useState(tempReadBooks);

  const [selectedId, setSelectedId] = useState(null);

  function handleSelectBook(id) {
    setSelectedId((currentId) => (id === currentId ? null : id));
  };

  function handleCloseBook() {
    setSelectedId(null);
  };

  useEffect(function () {
    async function fetcthBooks() {
      
     try {
      setIsloading(true);
      setError('')
      const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`);

      if (!res.ok) throw new Error('Something went wrong with fetching books');

   

      const data = await res.json();
      const bookData = data.docs.slice(0, 5);
      console.log(bookData.key);
if (bookData.length <= 0) throw new Error('Book not found');
    setBooks(bookData);
    
  }
  catch(err) {
    console.error(err.message);
setError(err.message);
    } finally {
      setIsloading(false);
    }
  }
  if (!searchQuery.length) {
    setBooks([]);
    setError('');
    return;
  }
    fetcthBooks();
  }, [searchQuery]);

  return (
    <div>
<Navbar >
  <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
</Navbar>

<Main>
  <Box>

{/* {isLoading ? <Loader /> : <BooksList books={books} />} */}
{isLoading && <Loader />}
{!isLoading && !error && <BooksList books={books} onSelectBook={handleSelectBook}  />}
{error && <Error message={error} />}

  </Box>

  <Box>
{
  selectedId ?
  ( <BookDetails selectedId={selectedId} onCloseBook={handleCloseBook} />) 
  : 
  (<>
    <ReadBooksSummary />
<ReadBooksList readBooks={readBooks}  />
  </>
    
)
}
  </Box>
 

</Main>
    </div>
  )
}