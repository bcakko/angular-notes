import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { NoteComponent } from './notes/note/note.component';
import { LoginComponent } from './login/login.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NoteComponent,
    AddNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
