import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../domain/recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Bacon and eggs',
      'A super duper fast and easy breakfast',
      'https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1600&h=1067&fit=crop'
    ),
    new Recipe(
      'Crambled eggs',
      'Healthy breakfast with deconstructed eggs',
      'https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1600&h=1067&fit=crop'
    ),
    new Recipe(
      'Cookies and milk',
      'The best and simplest breakfast to be done in less than 5 minutes',
      'https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1600&h=1067&fit=crop'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
