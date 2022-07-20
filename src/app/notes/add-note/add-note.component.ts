import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  @ViewChild('noteHeading', { static: true }) noteHeading!: ElementRef;
  @ViewChild('noteDetails', { static: true }) noteDetails!: ElementRef;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {}

  onAddNote() {
    const note: Note = {
      id: Math.random(),
      heading: this.noteHeading.nativeElement.value,
      note: this.noteDetails.nativeElement.value,
    };

    this.noteService.addNote(note);
  }
}
