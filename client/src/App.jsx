import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from "./Components/Header.jsx"
import Booklist from "./Components/Booklist.jsx"
import AddBook from "./Components/AddBook.jsx"


function App() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  
  async function addBook(newBook) { 
    const response = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBook)
        });
        response.ok ? console.log("Added succesfully") : console.log("Ann error occured");
    
    getBooks();
  }

  async function getBooks() { 
      try {
        // await new Promise(resolve => setTimeout(resolve, 3000));   -- wait 3 sec
        const response = await fetch("http://localhost:3000/books");
        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        }
        else {
          throw new Error("Failed to fetch books");
        }
      }
      catch (error) {
        setError("Failed to load books");
      }
      setLoading(false);
    }

  useEffect(() => {
    getBooks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;  
  }


  return (
    <>
      <Header />
      <AddBook addBook={addBook} />
      <Booklist books={books} />
    </>
    
  );
}

export default App
