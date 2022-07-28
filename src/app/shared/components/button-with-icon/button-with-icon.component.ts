import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss'],
})
export class ButtonWithIconComponent implements OnInit {
  @Input() icon_class!: string;
  @Output() buttonClick = new EventEmitter<() => void>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.buttonClick.emit()
  }
}
