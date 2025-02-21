import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background',
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css',
  standalone: true
})
export class BackgroundComponent {
  squares = new Array(25);

  getSquareStyle(index: number) {
    const randomLeft = Math.random() * 100 + '%';
    const randomTop = Math.random() * 100 + '%';
    const randomAnimationDuration = Math.random() * 5 + 3 + 's';
    const randomDelay = Math.random() * 2 + 's';

    return {
      left: randomLeft,
      top: randomTop,
      animationDuration: randomAnimationDuration,
      animationDelay: randomDelay
    };
  }

}

