import { ChangeDetectorRef, Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonComponent } from '../common/common.component';
import { BroadcastService } from '../../services/broadcast.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environemt';
import { GetBigTextDTO } from '../../dto/bigtext.dto';
import { RectangleComponent } from '../../components/graphic/rectangle.component';
import { BigTextService } from '../../services/rest/big.text.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [RouterModule, CommonComponent]
  
})
export class HomeComponent {
  constructor(private broadcastService: BroadcastService
    , private cdref: ChangeDetectorRef
    , private bigTextService: BigTextService) { }


  @ViewChild('commonRoot', { read: ViewContainerRef }) container!: ViewContainerRef;
  
  setContent(content: any) {
    this.broadcastService.sendContent(content)
    this.cdref.detectChanges();
  }

  showBigText() {
    this.bigTextService.getTexts().subscribe(
      (response: GetBigTextDTO[]) => {
        let list = response.map((item) => item.text + '<br>')
        this.setContent(list)
        console.log(list)
        const componentRef: ComponentRef<RectangleComponent> = this.container.createComponent(RectangleComponent);
        componentRef.instance.rect.position.x = Math.random() * 500; 
        componentRef.instance.rect.position.y = Math.random() * 500;
        console.log(componentRef.instance)
      },
      (error) => {
        console.error('Fehler beim erhalten des Textes:', error);
      }
    );
  }

}