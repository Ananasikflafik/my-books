import { useState } from "react";

function Book({ book }) {
    const { title, author, status } = book;
    return (
        <div>
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{status }</p>
        </div>
    )
}
export default Book