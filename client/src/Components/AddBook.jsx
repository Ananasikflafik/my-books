import { useState } from "react";

function AddBook({addBook}) { 
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");


    async function handleNewBook(event) {
        event.preventDefault();
        const newBook = {
            title: title,
            author: author,
            status: "want_to_read"
        };
        addBook(newBook);   
    }


    return (<form onSubmit={handleNewBook}>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        
        <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />

        <button type="submit">Add</button>
    </form>);
}
export default AddBook