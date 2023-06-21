const createError = require("http-errors")
const {Books} = require("./booksModel.js")

/* let booksList = [] */

exports.index = async (req, res) => {
    /* res.send(
        booksList
    ) */
    try {
        const books = await Books.find()
        res.send(books)
    } catch (error) {
        return (next(createError(500, error.message)))
    }
}

exports.create = async (req, res, next) => {
    if (!req.body.description) {
        return (next(createError(400, "description is required")))
    }
    try {
        const books = new Books({
            description: req.body.description,
            completed: req.body.completed,
        });
        await books.save();

        res.send({result: true});
    } catch (error) {
        return next(createError(500, error.message));
    }
  /* booksList.push({
    id: new Date().getTime(),
    description: req.body.description,
  })
  res.send({result: true}) */
}

exports.getSpecificBooks = async (req, res, next) => {
    if (!req.params.id) {
        return next(createError(400, "id is required"));
    }
    try {
        const books = await Books
    } catch (error) {
        return next(createError(500, error.message));
    }
    /* const BooksItem = booksListList.find(books => books.id === parseInt(req.params.id))
    if (!BooksItem) {
        return next(createError(404, "book not found"))
    }
    res.send(BooksItem) */
}

exports.delete = (req, res, next) => {
    const BooksItem = booksList.find(books => books.id === parseInt(req.params.id))
if (!BooksItem) {
    return next(createError(404, "book not found"))
}
booksList = booksList.filter(books => books.id !== parseInt(req.params.id))
}

exports.updateBooks = async (req, res, next) => {
    if (!req.params.id || !req.body.description) {
        return next(createError(400, "Please fill out all fields"));
    }
    try {
        const updateBooks = Books.findByIdAndUpdate
        if (r.matchedCount) {
        return res.send({ result: true })
        }
        return next(createError(500, error.message));
    } catch (error) {
        next (error)
    } 
    /* if (!req.body.description) {
        return (next(createError(404, "ahhhhhhhh")))
    }
    const BooksItem = booksList.find(books => books.id === parseInt(req.params.id))
if (!BooksItem) {
    return next(createError(404, "book not found"))
}
BooksItem.description = req.body.description
res.send({result: true}) */
}

// Mongoose testing //
/* const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("./.env")

    const booksSchema = new mongoose.Schema({
        name: String
    });

    booksSchema.methods.speak = function speak() {
        const greeting = this.name
        ? 'This books is called ' + this.name
        : 'This book is unlisted?';
        console.log(greeting);
    };
    const Books = mongoose.model('Books', booksSchema);

    const silence = new Books({ name: 'Silence' });
    console.log(silence.name);

    const HaloShadowofReach = new Books({ name: 'Halo: Shadow of Reach'});
    HaloShadowofReach.speak();

    await HaloShadowofReach.save();
    HaloShadowofReach.speak();

    const books = await Books.find();
    console.log(books);

    await Books.find({ name: /^Halo/ });
}
 */
