const mongoose = require("mongoose")

const booksSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    }
})

module.exports.Books = mongoose.model("Books", booksSchema);
