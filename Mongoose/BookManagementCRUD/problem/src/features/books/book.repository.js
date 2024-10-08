// -------------pre-written code starts---------------
import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

export default class BookRepository {

    //book creation
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    // filtering of book by id
    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }

    // ------------prewritten code ends----------------


    // Complete the following functions:

    //filtering the books based on genre
    async listBooksByGenre(genre) {

        try {
            const books = await booksModel.find({ genre: genre });
            return books;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    //increasing the count of available books
    async updateBookAvailability(bookId, quantity) {

        try {
            const books = await booksModel.findByIdAndUpdate(bookId, { $inc: { availableCopies: quantity } }, { new: true });
            return books;
        } catch (err) {
            console.log(err);
            return null; s
        }
    }

    //deletion of book
    async deleteBookById(bookId) {
        try {
            const book = await booksModel.findByIdAndDelete(bookId);
            return book;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}