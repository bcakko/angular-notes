import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Note } from 'src/app/shared/models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() note_box_class!: string;
  @Input() note_details!: Note;
  @Output() removeNoteEvent = new EventEmitter<number>();

  constructor() {}

  onRemoveNote() {
    this.removeNoteEvent.emit(this.note_details.id);
  }
}
