import Book from "./Book.jsx"

function Booklist({books}) {
    return (
        <div>
            {books.map((book) => (
                <Book
                    // key={book.id}
                    book = {book} />
            ))
            }
         </div>
    )
}
export default Booklist