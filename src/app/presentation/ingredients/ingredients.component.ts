import { ShoppingListService } from './../../application/shopping-list/shopping-list.service';
import { Ingredient } from './../../domain/ingredient.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent {
  @Input() ingredients: Ingredient[] = [];
  @Input() isOnRecipe: boolean = true;

  constructor(private shoppingListService: ShoppingListService) {}

  removeIngredient(ingredient: Ingredient) {
    this.shoppingListService.removeFromShoppingList(ingredient);
  }

  onEditIngredient(index: number) {
    this.shoppingListService.ingredientEdit.next(index);
  }
}
