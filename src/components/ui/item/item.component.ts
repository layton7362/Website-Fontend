import { Component, Input } from '@angular/core';
import { Rect2 } from '../../../common/math';

@Component({
  selector: 'item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input()
  rect: Rect2 = new Rect2; 

}
