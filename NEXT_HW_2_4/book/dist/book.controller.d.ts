import { BookService } from './book.service';
import { BookDto } from './book.model';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBooks(): any[];
    createBook(bookDto: BookDto): string;
    getBook(id: string): any;
    deleteBook(id: string): string;
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
