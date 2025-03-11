import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((res) => setBooks(res.data));
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5000/books/${id}`).then(() => {
      setBooks(books.filter((book) => book._id !== id));
    });
  };

  return (
    <div>
      <h1>Book Store</h1>
      <Link to="/add-book">Add Book</Link>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} - {book.author} - ${book.price}
            <button onClick={() => deleteBook(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
