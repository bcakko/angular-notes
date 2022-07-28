import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Note } from 'src/app/shared/models/note.model';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() note_details!: Note;
  @Input() key!: 'notes' | 'done';
  @Output() toggleEditEvent = new EventEmitter<{
    note: Note;
    key: 'notes' | 'done';
  }>();
  @Output() removeNoteEvent = new EventEmitter<{
    id: number;
    key: 'notes' | 'done';
  }>();

  constructor() {}

  onToggleEdit() {
    this.toggleEditEvent.emit({ note: this.note_details, key: this.key });
  }

  onRemoveNote() {
    this.removeNoteEvent.emit({ id: this.note_details.id, key: this.key });
  }
}
