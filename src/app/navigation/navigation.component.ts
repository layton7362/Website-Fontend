import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, ButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class NavigationComponent {

  constructor(private router: Router) { }

  onHomeClicked() {
    this.router.navigate(['/home']);
  }

  onInfoClicked() {
    setTimeout(() =>{
      alert("Info")
      this.router.navigate(['/info']);
    }, 10)
  }

}
