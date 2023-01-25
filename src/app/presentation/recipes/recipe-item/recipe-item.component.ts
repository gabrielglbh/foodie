import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/application/recipes/recipes.service';
import { Recipe } from 'src/app/domain/recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onRecipeTap() {
    this.recipeService.recipeEventEmitter.emit(this.recipe);
  }
}
