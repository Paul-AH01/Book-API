const express = require("express")
const router = express.Router()
const books = require("./booksController.js")

// getting all of the todos
router.get("/books", books.index)
router.post("/books/create", books.create)
router.get("/books/:id", books.getSpecificBooks)
router.delete("/books/:id", books.delete)
router.put("/books/:id", books.updateBooks)

module.exports = router
