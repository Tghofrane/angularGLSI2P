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
  newBook: Book = new Book(); // Object to store the new book details

  constructor(private libraryService: LibraryService) { }
  // The constructor initializes the component and injects the LibraryService

  ngOnInit(): void {
    this.readBooks(); // Call readBooks method when init after the component's data-bound properties have been initialized
  }

  createBook(book: any): void {
    this.libraryService.createBook(book); //delegates the book creation to the library service
    this.readBooks(); // refetch the list
  }

  readBooks(): void {
    this.books = this.libraryService.readBooks(); //retrieves the list of books from the library service and assigns it to the books array
  }

  updateBook(index: number, book: any): void {
    this.libraryService.updateBook(index, book);
    this.readBooks(); // Refetch the list
  }

  deleteBook(index: number): void {
    this.libraryService.deleteBook(index);
    this.readBooks(); // Refetch the list
  }
}
