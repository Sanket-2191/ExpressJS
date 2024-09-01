import mongoose from 'mongoose';
import BookRepository from "./book.repository.js";

export default class BookController {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    //------change code in below functions only--------

    // creation of book
    createBook = async (req, res) => {
        try {
            const { title, author, genre, copies, availableCopies } = req.body;
            const book = await this.bookRepository.createBook({ title, author, genre, copies, availableCopies });

            return res.status(201).json(book);

        } catch (err) {
            console.log(err);
            return res.status(404).json({ msg: "Could not add the book" });
        }
    }

    // filtering of book by id
    getOne = async (req, res) => {
        try {
            const { bookId } = req.params;
            console.log(bookId);
            // const bookID = id;
            const book = await this.bookRepository.getOne(bookId);

            if (book) return res.json(book);
            else return res.status(404).json({ msg: "Could not find the book for given ID" });

        } catch (err) {
            console.log(err);
            return res.status(404).json({ msg: "Something went wrong while finding the book for given ID" });
        }
    }

}
