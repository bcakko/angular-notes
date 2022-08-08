import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/shared/models/note.model';

@Component({
  selector: 'remove-note',
  templateUrl: './remove-note.component.html',
  styleUrls: ['./remove-note.component.scss'],
})
export class RemoveNoteComponent {
  @Input() note_details!: Note;
  @Input() key!: 'notes' | 'done';
  @Output() removeNoteEvent = new EventEmitter<{
    note: Note;
    key: 'notes' | 'done';
  }>();
  @Output() closeRemoveEvent = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  onRemoveNote() {
    this.removeNoteEvent.emit({
      note: this.note_details,
      key: this.key,
    });
  }

  onToggleRemove() {
    this.closeRemoveEvent.emit();
  }
}
