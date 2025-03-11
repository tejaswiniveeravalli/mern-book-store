import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/books", { title, author, price })
      .then(() => navigate("/"));
  };

  return (
    <form onSubmit={submitForm}>
      <h2>Add Book</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBook;
