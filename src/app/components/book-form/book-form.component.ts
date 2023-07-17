import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  @Input() book : Book = new Book();
  @Input() isUpdateMode = false;
  @Output() submitForm = new EventEmitter<any>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitForm.emit(form.value);
      console.log("HERE" , this.book);
      form.resetForm();
    }
  }
}
