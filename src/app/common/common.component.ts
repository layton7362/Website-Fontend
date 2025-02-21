import { Component, Output, EventEmitter, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from "../content/content.component";
import { NavigationComponent } from "../navigation/navigation.component";
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrl: './common.component.css',
  standalone: true,
  imports: [HeaderComponent
    , FooterComponent
    , ContentComponent
    , NavigationComponent
    , BackgroundComponent]
})
export class CommonComponent  {

}
