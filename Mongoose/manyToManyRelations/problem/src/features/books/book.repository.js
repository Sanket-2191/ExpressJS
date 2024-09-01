// Make necessary imports here.
// Don't change the pre-written code.

import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'
import { reviewSchema } from './review.schema.js';
import { authorSchema } from './author.schema.js';

// creating model from schema.
const booksModel = mongoose.model('Books', bookSchema);

// creating model for review.
const reviewModel = mongoose.model('Review', reviewSchema);

const authorModel = mongoose.model('Author', authorSchema)


export default class BookRepository {
    async getAll() {
        const allBooks = await booksModel.find({});
        console.log(allBooks);
        return { allBooks };
    }
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    async addReviewToBook(bookId, text, rating) {
        const reviewData = {
            text,
            rating,
            book: new mongoose.Types.ObjectId(bookId)
        }
        const review = new reviewModel(reviewData);
        const savedReview = await review.save();

        const book = await booksModel.findById(bookId);

        book.reviews.push(savedReview._id);

        await book.save();

        return savedReview;

    }

    async getOne(id) {
        const book = await booksModel.findById(id);
        console.log(book);
        return book;
    }

    async listBooksByGenre(genre) {
        const books = await booksModel.find({ genre });
        return books;
    }

    async updateBookAvailability(bookId, quantity) {

        console.log(bookId);
        const book = await booksModel.findById(bookId);

        // Calculate the new availableCopies value
        const newAvailableCopies = book.availableCopies + quantity;

        // Update the availableCopies field and save the book
        book.availableCopies = newAvailableCopies;

        await book.save();
        return book;
    }

    async deleteBookById(bookId) {
        const deletedBook = await booksModel.findByIdAndRemove(bookId);
        return deletedBook;
    }

    // Complete the following four funtions.
    async createAuthor(authorData) {
        const newAuthor = new authorModel({ name: authorData.name, books: authorData.books || [] });

        const createdAuthor = await newAuthor.save();

        return createdAuthor;
    }

    async addAuthorToBook(bookId, authorId) {
        // authorModel.
        try {
            // Update the book to add the author and return the updated document
            const Author = await authorModel.findOne({ _id: authorId });

            if (Author.books.includes(bookId)) {
                throw new Error('The book is already in the author\'s books array');
            }
            const book = await booksModel.findByIdAndUpdate(
                bookId,
                { $push: { authors: new mongoose.Types.ObjectId(authorId) } },
                { new: true, useFindAndModify: false }
            );

            // Update the author to add the book and return the updated document
            const author = await authorModel.findByIdAndUpdate(
                authorId,
                { $push: { books: new mongoose.Types.ObjectId(bookId) } },  // Ensure the author schema has a books field
                { new: true, useFindAndModify: false }
            );

            return { book, author };
        } catch (error) {
            console.error('Error adding author to book:', error);
            throw new Error(error);
        }
    }

    async listAuthorsByBook(bookId) {
        try {
            const book = await booksModel.findById(bookId).populate('authors');
            console.log(book);
            const authors = book.authors;

            return authors;
        } catch (error) {
            console.error('Error listing Authors By Book:', error);
            throw new Error(error);
        }

    }

    async listBooksByAuthor(authorId) {
        try {
            const author = await authorModel.findById(authorId).populate('books');
            console.log(author);
            const books = author.books;

            return books;
        } catch (error) {
            console.error('Error listing Books By Author:', error);
            throw new Error(error);
        }
    }
}