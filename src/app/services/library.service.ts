import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private books: any[] = []; // Array to store the books

  constructor() { }

  createBook(book: any): void {
    // Add new book to the array books
    this.books.push(book);
  }

  readBooks(): any[] {
    // Return all books
    return this.books;
  }

  updateBook(index: number, book: any): void {
    // Update book at the specified index
    this.books[index] = book;
  }

  deleteBook(index: number): void {
    // Remove book at the specified index
    this.books.splice(index, 1);
  }
}
