import { CustomHttpService } from './../../application/http/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  constructor(private httpService: CustomHttpService) {}

  saveRecipes() {
    this.httpService.storeRecipes().subscribe((_) => alert('Recipe saved'));
  }

  fetchRecipes() {
    this.httpService.fetchRecipes().subscribe();
  }
}
