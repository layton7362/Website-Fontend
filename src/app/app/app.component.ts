import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { Config } from '../../services/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  title: string = "World of fun!"
  config: Config = {}

  constructor(private configService: ConfigService) { }

}