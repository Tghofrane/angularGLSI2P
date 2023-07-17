import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  books: Book[] = []; // Array to store the books
  newBook: Book = new Book; // Object to store the new book details

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.readBooks(); // Call readBooks on component initialization
  }

  createBook(book: any): void {
    this.libraryService.createBook(book);
    this.readBooks(); // Refresh the book list
  }

  readBooks(): void {
    this.books = this.libraryService.readBooks();
  }

  updateBook(index: number, book: any): void {
    this.libraryService.updateBook(index, book);
    this.readBooks(); // Refresh the book list
  }

  deleteBook(index: number): void {
    this.libraryService.deleteBook(index);
    this.readBooks(); // Refresh the book list
  }
  
}
