import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notebook-app-start';
  recievedData!: string;
  onDataRecieved(data: string) {
    this.recievedData = data;
  }
}
