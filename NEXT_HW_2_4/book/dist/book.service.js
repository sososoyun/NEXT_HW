"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
class BookService {
    constructor() {
        this.books = [];
    }
    getAllBooks() {
        return this.books;
    }
    createBook(bookDto) {
        const id = this.books.length + 1;
        this.books.push({ id: id.toString(), ...bookDto, createdDt: new Date() });
    }
    getBook(id) {
        const book = this.books.find((book) => book.id === id);
        console.log(book);
        return book;
    }
    deleteBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
    updateBook(id, bookDto) {
        const updateIndex = this.books.findIndex((book) => book.id === id);
        const updatedBook = { id, ...bookDto, updatedDt: new Date() };
        this.books[updateIndex] = updatedBook;
        return updatedBook;
    }
}
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map