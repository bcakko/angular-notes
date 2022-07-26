import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { NoteComponent } from './notes/note/note.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotesComponent,
    LoginComponent,
    NoteComponent,
    AddNoteComponent,
  ],
  imports: [BrowserModule, SharedModule, FormsModule, DragDropModule],
})
export class PagesModule {}
