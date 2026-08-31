import { useState } from 'react'
import './App.css'
import Header from "./Components/Header.jsx"
import Booklist from "./Components/Booklist.jsx"
import AddBook from "./Components/AddBook.jsx"

function App() {
  const book1 = {
        id: 1,
        title: "Inferno",
        author: "D. Brown",
        status: "read"
    };
    const book2 = {
        id: 2,
        title: "Duna",
        author: "F. Hermet",
        status: "want_to_read"
    };

  const [books, setBooks] = useState([book1,book2]);



  
  function addBook(newBook) { 
    setBooks([...books, newBook]);
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
