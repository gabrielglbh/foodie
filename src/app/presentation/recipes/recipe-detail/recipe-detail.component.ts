import { ShoppingListService } from 'src/app/application/shopping-list/shopping-list.service';
import { RecipeService } from 'src/app/application/recipes/recipes.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/domain/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params) => (this.recipe = this.recipeService.getRecipe(params['id']))
    );
  }

  addToShoppingList() {
    this.recipe.ingredients.forEach((ingredient) =>
      this.shoppingListService.addToShoppingList(ingredient)
    );
  }
}
