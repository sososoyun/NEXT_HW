import {
  Controller,
  Param,
  Body,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.model';

@Controller('book')
export class BookController {
  private readonly bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  @Get()
  getAllBooks() {
    console.log('모든 책 가져오기');
    return this.bookService.getAllBooks();
  }

  @Post()
  createBook(@Body() bookDto: BookDto) {
    console.log('새 책 추가');
    this.bookService.createBook(bookDto);
    return 'success';
  }

  @Get('/:id')
  getBook(@Param('id') id: string) {
    console.log('책 하나 가져오기');
    return this.bookService.getBook(id);
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string) {
    console.log('책 삭제');
    this.bookService.deleteBook(id);
    return 'success';
  }

  @Put('/:id')
  updateBook(@Param('id') id: string, @Body() bookDto: BookDto) {
    console.log('책 정보 업데이트', id, bookDto);
    return this.bookService.updateBook(id, bookDto);
  }
}
