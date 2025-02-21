import { Component, HostListener, Input } from "@angular/core";
import { Color } from "../../common/color";
import { Rect2 } from "../../common/math";

@Component({
    selector: "rect-root",
    styleUrl: "./rectangle.component.css",
    standalone: true,
    templateUrl: 'rectangle.component.html' 
})
export class RectangleComponent {
    @Input() 
    rect: Rect2 = new Rect2
    @Input() 
    color = Color.BLUE
    @Input() 
    speed: number = 10
    @Input() 
    inputable: boolean = false

    @HostListener("window:keydown", ["$event"])
    handleKeyDown(event: KeyboardEvent) {
        if (!this.inputable) {
            return;
        }
        if (event.key === "d" || event.key === "ArrowRight") {
            this.rect.position.x = Math.min(this.rect.position.x + this.speed, 1000)
        }
        else if (event.key === "a" || event.key === "ArrowLeft") {
            this.rect.position.x = Math.max(this.rect.position.x - this.speed, 0)
        }
        if (event.key === "s" || event.key === "ArrowDown") {
            this.rect.position.y = Math.min(this.rect.position.y + this.speed, 1000)
        }
        else if (event.key === "w" || event.key === "ArrowUp") {
            this.rect.position.y = Math.max(this.rect.position.y - this.speed, 0)
        }
    }
}