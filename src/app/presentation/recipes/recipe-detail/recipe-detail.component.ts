import { RecipeService } from 'src/app/application/recipes/recipes.service';
import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/domain/recipe.model';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipeService.recipeEventEmitter.subscribe(
      (args) =>
        (this.recipe = new Recipe(
          args.name,
          args.description,
          args.imagePath,
          args.ingredients
        ))
    );
  }
}
