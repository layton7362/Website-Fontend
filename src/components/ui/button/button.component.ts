import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { task, taskExample } from '../ui_tasks';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent extends ItemComponent {

  @Input() cb_click: () => void = task;

}
