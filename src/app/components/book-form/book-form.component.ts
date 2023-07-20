import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  @Input() book: Book = new Book();
  // Input decorator for 'book' property that represents the book object passed from the Library component.
  
  @Input() isUpdateMode = false;
  // @Input decorator for 'isUpdateMode' allows the component to receive a boolean value indicating whether it's in update mode.

  @Output() submitForm = new EventEmitter<any>();
  // 'submitForm' is an Output property that emits an event when the form is submitted.

  onSubmit(form: NgForm) {
    // It receives the 'NgForm' instance from the form template, which gives access to the form controls.

    if (form.valid) {
      // Check if the form is valid, meaning all the required fields have valid values.
      // all fields are required , form.valid is true when all the fields are not empty

      this.submitForm.emit(form.value);
      // Emit the 'submitForm' event with the book data as the payload.
      // The library component is listening to this event and handle the form submission.

      form.resetForm();
      // Reset the form to clear the inputs.
    }
  }
}
