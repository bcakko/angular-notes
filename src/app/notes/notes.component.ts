import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.notes.subscribe((value) => {
      this.notes = value;
    });
  }
}
