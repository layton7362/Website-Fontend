import { Component, inject, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { BroadcastService } from '../../services/broadcast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit, OnDestroy {

  constructor(private broadcastService: BroadcastService) {}
  
  @Input() content: any = ""
  
  private configService: ConfigService = inject(ConfigService)
  private subscription!: Subscription;
  
  ngOnInit() {
    this.subscription = this.broadcastService.contentMessage$.subscribe(this.onContentLoad.bind(this));
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  onContentLoad(content: any) {
    this.content = content
  }

  protected getLine(): string {
    if (this.configService.config.debug) {
      return "dashed"
    } else {
      return "none"
    }
  }

}