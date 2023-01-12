import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Bacon and eggs',
      'Bacon and eggs',
      'https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1600&h=1067&fit=crop'
    ),
    new Recipe(
      'Bacon and eggs',
      'Bacon and eggs',
      'https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1600&h=1067&fit=crop'
    ),
    new Recipe(
      'Bacon and eggs',
      'Bacon and eggs',
      'https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1600&h=1067&fit=crop'
    ),
  ];
}
