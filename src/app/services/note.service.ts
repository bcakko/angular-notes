import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Error } from '../shared/error.model';
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

  error$ = new BehaviorSubject<Error | false>(false);
  error = this.error$.asObservable();

  getNotes() {
    return this.notes$.value.slice();
  }

  addNote(note: Note) {
    if (!note.heading.trim().length) {
      this.error$.next({
        name: 'wrong-heading',
        message: 'Please enter a valid heading.',
      });
      return;
    }
    if (!note.note.trim().length) {
      this.error$.next({
        name: 'wrong-note',
        message: 'Please enter a valid note.',
      });
      return;
    }
    this.error$.next(false);
    this.notes$.value.push(note);
  }
}
