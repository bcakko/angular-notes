import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-with-text',
  templateUrl: './button-with-text.component.html',
  styleUrls: ['./button-with-text.component.scss'],
})
export class ButtonWithTextComponent implements OnInit {
  @Input() class!: string;
  @Input() text!: string;
  @Input() type!: string;
  constructor() {}

  ngOnInit(): void {}
}
