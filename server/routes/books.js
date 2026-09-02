import db from "../db.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    const books = db.prepare(`
        SELECT * FROM books`).all();
    
    res.json(books);
});

router.get("/:id", (req, res) => {
    const book = db.prepare(`SELECT * FROM books 
        WHERE id = ?`).get(req.params.id);
    
    if (!book) {
        return res.status(404).json({
            error: "Book not found"
        });
    }
    res.json(book);
});

router.post("/", (req, res) => {
    const { title, author, status } = req.body;
    if (!title || !author || !status) {
        return res.status(400).json({
            error: "Title, author and status are required"
        });
    }

    const validStatuses = ["read", "want_to_read"];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({
            error: "Invalid status"
        });
    }

    const statement = db.prepare(`INSERT INTO books (title, author, status)
        VALUES (?, ?, ?)`);
    
    statement.run(title, author, status);
    res.json({message: "Book was added"});
});

router.delete("/:id", (req, res) => {
    const statement = db.prepare(`DELETE FROM books WHERE id = ?`);

    statement.run( req.params.id);
    res.json({ message: "Book was deleted" });
});

router.put("/:id", (req, res) => {
    const statement = db.prepare(`UPDATE books SET status = ? WHERE id = ?`);

    statement.run(req.body.status, req.params.id);

    res.send("Book was updated");
});

export default router;