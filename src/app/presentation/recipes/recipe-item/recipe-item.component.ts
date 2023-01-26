import { RecipeService } from 'src/app/application/recipes/recipes.service';
import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/domain/recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService) {}

  onRecipeClicked() {
    this.recipeService.recipeEdit.next(this.index);
  }
}
