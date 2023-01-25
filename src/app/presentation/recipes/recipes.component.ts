import { Component } from '@angular/core';
import { Recipe } from 'src/app/domain/recipe.model';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  recipeDetails: Recipe;

  onSelectedRecipe(recipe: Recipe) {
    this.recipeDetails = recipe;
  }
}
