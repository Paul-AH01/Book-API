const createError = require("http-errors")

let booksList = []
let idno = 0

exports.index = function (req, res) {
    res.send({
        key: "item"
    })
}

exports.create = (req, res, next) => {
    if (!req.body.description) {
        return (next(createError(400, "description is required")))
    }
  booksList.push({
    id: new Date().getTime(),
    description: req.body.description,
  })
  res.send({result: true})
}

exports.getSpecificBooks = (req, res, next) => {
    const BooksItem = booksListList.find(books => books.id === parseInt(req.params.id))
    if (!BooksItem) {
        return next(createError(404, "book not found"))
    }
    res.send(BooksItem)
}

exports.delete = (req, res, next) => {
    const BooksItem = booksList.find(books => books.id === parseInt(req.params.id))
if (!BooksItem) {
    return next(createError(404, "book not found"))
}
booksList = booksList.filter(books => books.id !== parseInt(req.params.id))
}

exports.updateBooks = (req, res, next) => {
    if (!req.body.description) {
        return (next(createError(404, "ahhhhhhhh")))
    }
    const BooksItem = booksList.find(books => books.id === parseInt(req.params.id))
if (!BooksItem) {
    return next(createError(404, "book not found"))
}
BooksItem.description = req.body.description
res.send({result: true})
}