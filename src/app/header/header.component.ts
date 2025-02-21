import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {
  constructor(
    private readonly router: Router
    , private readonly route: ActivatedRoute
  ) { }

  onStart() {
    this.router.navigate(['home'], {})
  }

  onIdea() {
    this.router.navigate(['/idea'], {});
  }
}