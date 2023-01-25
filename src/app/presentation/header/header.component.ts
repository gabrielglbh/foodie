import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  constructor(private router: Router) {}

  onSelect(page: string) {
    if (page === 'recipes') {
      this.router.navigate(['recipes']);
    } else {
      this.router.navigate(['shopping-list']);
    }
  }
}
