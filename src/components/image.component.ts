import { Component } from '@angular/core';
@Component({
    selector: 'image-root',
    template: `
        <img [src]="imagePath" alt="Image Not Found: {{imagePath}}" width="300" height="200">
    `,
})
export class ImageComponent {
    imagePath: string = 'assets/img/luna.jpg'
}