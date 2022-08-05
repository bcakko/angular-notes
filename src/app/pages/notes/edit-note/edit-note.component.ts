import { NgForm } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Note } from 'src/app/shared/models/note.model';
import { DateDetailer } from 'src/app/shared/helpers/DateDetailer';

@Component({
  selector: 'edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  @Output() closeEditEvent = new EventEmitter<Event>();

  @Output() editNoteSubmitEvent = new EventEmitter<{
    note: Note;
    key: 'notes' | 'done';
  }>();

  @Input() note_details!: Note;
  @Input() key!: 'notes' | 'done';

  constructor() {}

  ngOnInit(): void {}

  onCancelEdit() {
    this.closeEditEvent.emit();
  }

  onSubmit(form: NgForm) {
    this.editNoteSubmitEvent.emit({
      note: {
        id: this.note_details.id,
        heading: form.value.heading,
        note: form.value.note,
        date: new DateDetailer(),
      },
      key: this.key,
    });
    this.closeEditEvent.emit();
  }
}
