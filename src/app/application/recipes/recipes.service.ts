import { EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/domain/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Bacon and eggs',
      'A super duper fast and easy breakfast',
      'https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1600&h=1067&fit=crop'
    ),
    new Recipe(
      'Crambled eggs',
      'Healthy breakfast with deconstructed eggs',
      'https://assets.bonappetit.com/photos/57ace84d53e63daf11a4db61/1:1/w_1600,c_limit/SCRAMBLED-EGG-1-of-1.jpg'
    ),
    new Recipe(
      'Cookies and milk',
      'The best and simplest breakfast to be done in less than 5 minutes',
      'https://www.mashed.com/img/gallery/the-reason-milk-and-cookies-taste-great-together/intro-1648138138.webp'
    ),
  ];

  recipeEventEmitter = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe() {}

  updateRecipe() {}

  removeRecipe() {}
}
