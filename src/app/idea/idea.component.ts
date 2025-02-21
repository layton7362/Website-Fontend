import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { BroadcastService } from '../../services/broadcast.service';

@Component({
  selector: 'app-idea',
  imports: [CommonComponent],
  standalone: true,
  templateUrl: './idea.component.html',
  styleUrl: './idea.component.css'
})
export class IdeaComponent {
  constructor(private broadcastService: BroadcastService, private cdref: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.broadcastService.sendContent(`
      Das hier ist die Info Seite.
    `)
    this.cdref.detectChanges()
  }
}
