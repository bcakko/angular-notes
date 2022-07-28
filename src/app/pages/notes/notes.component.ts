import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Note } from 'src/app/shared/models/note.model';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  notes: Note[] = this.getData('notes');
  done: Note[] = this.getData('done');
  isEditing: boolean = false;
  editingNote!: Note;
  editingKey!: 'notes' | 'done';

  constructor() {}

  addNote(note: Note) {
    this.notes.push(note);
    this.setData('notes', this.notes);
  }

  toggleEdit(detailsObj: { note: Note; key: 'notes' | 'done' }) {
    this.isEditing = !this.isEditing;
    this.editingNote = detailsObj.note;
    this.editingKey = detailsObj.key;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  editNote(detailsObj: { note: Note; key: 'notes' | 'done' }) {
    let newArr: Note[] = [];
    console.log(detailsObj);
    if (detailsObj.key === 'notes') {
      newArr = this.notes.map((note) => {
        if (note.id === detailsObj.note.id) {
          return {
            ...note,
            heading: detailsObj.note.heading,
            note: detailsObj.note.note,
          };
        }
        return note;
      });
      this.notes = newArr;
    } else {
      newArr = this.done.map((note) => {
        if (note.id === detailsObj.note.id) {
          return {
            ...note,
            heading: detailsObj.note.heading,
            note: detailsObj.note.note,
          };
        }
        return note;
      });
      this.done = newArr;
    }

    this.setData(detailsObj.key, newArr);
  }

  removeNote(detailsObj: { id: number; key: 'notes' | 'done' }) {
    let newArr: Note[] = [];
    if (detailsObj.key === 'notes') {
      newArr = this.notes.filter((item) => item.id !== detailsObj.id);
      this.notes = newArr;
    } else {
      newArr = this.done.filter((item) => item.id !== detailsObj.id);
      this.done = newArr;
    }
    this.setData(detailsObj.key, newArr);
  }

  setData(key: 'notes' | 'done', value: Note[]) {
    const localValue = JSON.stringify(value);
    localStorage.setItem(key, localValue);
  }

  getData(key: 'notes' | 'done') {
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
    this.setData('notes', this.notes);
    this.setData('done', this.done);
  }
}
