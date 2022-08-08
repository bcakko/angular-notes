import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  DateDetailer,
  getTime,
  getDate,
} from '../../../shared/helpers/DateDetailer';
import { Note } from '../../../shared/models/note.model';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() note_details!: Note;
  @Input() key!: 'notes' | 'done';
  @Output() toggleEditEvent = new EventEmitter<{
    note: Note;
    key: 'notes' | 'done';
  }>();
  @Output() toggleRemoveEvent = new EventEmitter<{
    note: Note;
    key: 'notes' | 'done';
  }>();
  removeOpen: boolean = false;
  date!: string;
  time!: string;

  constructor() {}

  ngOnInit(): void {
    this.date = getDate(this.note_details.date);
    this.time = getTime(this.note_details.date);
  }

  onToggleEdit() {
    this.toggleEditEvent.emit({ note: this.note_details, key: this.key });
  }

  onToggleRemove() {
    this.toggleRemoveEvent.emit({ note: this.note_details, key: this.key });
  }
}
