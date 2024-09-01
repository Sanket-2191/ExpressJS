import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'

const Book = mongoose.model('book', bookSchema);

export default class BookRepository {


    // -----Change code in below functions only-----

    //book creation
    async createBook(bookData) {
        try {
            const newBook = new Book(bookData);
            await newBook.save();
            return newBook;
        } catch (err) {
            console.log(err);
        }


    }

    //filtering the book by id
    async getOne(id) {

        try {
            console.log("in getOne repository function");
            let _id = id;
            const book = await Book.findById(_id);
            console.log(book);
            return book;

        } catch (err) {
            console.log(err);
        }

    }
}