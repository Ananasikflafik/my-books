import { useState } from "react";

function AddBook({addBook}) { 
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");


    function handleNewBook() {
        const newBook = {
            title: title,
            author: author,
            status: "want_to_read"
        };
        addBook(newBook);
    }


    return (<div>
        <p>Add Book:</p>
        <div>
            <span>Title:</span>
            <input value={title} onChange={(event) => setTitle(event.target.value)} type="text"/>
        </div>
        <div>
            <span>Author:</span>
            <input value={author } onChange={(event) => setAuthor(event.target.value)} type="text" />
        </div>
        <button onClick={handleNewBook}>Add</button>
    
    </div>)
}
export default AddBook