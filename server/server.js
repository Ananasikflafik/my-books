import express from "express";
import db from "./db.js";
import booksRouter from "./routes/books.js"
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/books", booksRouter);



app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});