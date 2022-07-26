import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth-guard.service';
import { NotesComponent } from './pages/notes/notes.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './shared/services/login-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
  { path: 'notes', canActivate: [AuthGuard], component: NotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
