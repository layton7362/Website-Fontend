import { Component, ComponentRef, ViewContainerRef, HostListener, ViewChild } from "@angular/core";
import { RectangleComponent } from "./graphic/rectangle.component";
import { Color } from "../common/color";
import { Rect2, Vector2 } from "../common/math";

@Component({
    selector: "playground-root",
    imports: [RectangleComponent],
    standalone: true,
    template: `
    <div #container>
        <rect-root id=player [rect]="player_rect" [speed]="50" [inputable]="true"></rect-root>
    </div>
`
})
export class PlaygroundComponent {
    @ViewChild("container", { read: ViewContainerRef }) container!: ViewContainerRef;

    player_rect = new Rect2(new Vector2(200,200), new Vector2(200,200))

    Color = Color

    @HostListener("window:keydown", ["$event"])
    handleKeyDown(event: KeyboardEvent) {
        if (event.key === " ") {
            let player = document.getElementById("player")
            this.addRect()
        }
    }

    addRect() {
        const componentRef: ComponentRef<RectangleComponent> = this.container.createComponent(RectangleComponent);
        componentRef.instance.rect.position.x = Math.random() * 500; 
        componentRef.instance.rect.position.y = Math.random() * 500;
    }

}