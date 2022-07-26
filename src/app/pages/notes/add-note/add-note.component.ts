import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/models/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent {
  @Output() addNoteEvent = new EventEmitter<Note>();

  isFormShown: boolean = false;

  constructor() {}

  onSubmit(form: NgForm) {
    const note = new Note(Math.random(), form.value.heading, form.value.note);
    this.addNoteEvent.emit(note);
    form.resetForm();
    this.toggleForm();
  }

  onClose() {}

  toggleForm() {
    this.isFormShown = !this.isFormShown;
  }
}
