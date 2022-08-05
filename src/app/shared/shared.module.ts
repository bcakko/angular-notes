import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ButtonWithIconComponent } from './components/button-with-icon/button-with-icon.component';
import { ButtonWithTextComponent } from './components/button-with-text/button-with-text.component';
import { DialogComponent } from './components/UI/dialog/dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonWithIconComponent,
    ButtonWithTextComponent,
    DialogComponent,
  ],
  imports: [AppRoutingModule, BrowserModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonWithIconComponent,
    ButtonWithTextComponent,
  ],
})
export class SharedModule {}
