import { BookDto } from './book.model';
export declare class BookService {
    books: any[];
    getAllBooks(): any[];
    createBook(bookDto: BookDto): void;
    getBook(id: string): any;
    deleteBook(id: string): void;
    updateBook(id: string, bookDto: BookDto): {
        updatedDt: Date;
        id: string;
        title: string;
        writer: string;
        date: string;
        isAvailable: boolean;
        createdDt?: Date;
    };
}
