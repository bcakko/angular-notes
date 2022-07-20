import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../shared/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {}

  private notes$ = new BehaviorSubject<Note[]>([
    { id: 1, heading: 'Test', note: 'This is a test!' },
  ]);
  
  notes = this.notes$.asObservable();

  getNotes() {
    return this.notes$.value.slice();
  }

  addNote(note: Note) {
    this.notes$.value.push(note);
  }
}
