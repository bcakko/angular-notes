import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Error } from 'src/app/shared/error.model';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  @ViewChild('noteHeading', { static: true }) noteHeading!: ElementRef;
  @ViewChild('noteDetails', { static: true }) noteDetails!: ElementRef;
  error!: Error | false;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.error.subscribe((value) => {
      this.error = value;
    });
  }

  onAddNote() {
    const note = new Note(
      Math.random(),
      this.noteHeading.nativeElement.value,
      this.noteDetails.nativeElement.value
    );

    this.noteService.addNote(note);
  }

  onClose() {}
}
