import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Note } from 'src/app/shared/models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})

export class NotesComponent {
  notes: Note[] = this.getData('notes');
  done: Note[] = [
    { id: Math.random(), heading: 'Brush teeth', note: '7:30 AM' },
    { id: Math.random(), heading: 'Drive Car', note: '8:30 PM' },
  ];

  constructor() {}

  addNote(note: Note) {
    this.notes.push(note);
    this.setData('notes', this.notes);
  }

  removeNote(id: number) {
    this.notes = this.notes.filter((item) => item.id !== id);
    this.setData('notes', this.notes);
  }

  setData(key: string, value: Note[]) {
    const localValue = JSON.stringify(value);
    localStorage.setItem(key, localValue);
  }

  getData(key: string) {
    const dataJSON = localStorage.getItem(key);
    return dataJSON ? JSON.parse(dataJSON) : [];
  }

  drop(event: CdkDragDrop<Note[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
