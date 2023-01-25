import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/domain/ingredient.model';

export class ShoppingListService {
  shoppingListChanged = new EventEmitter<Ingredient[]>();

  private shoppingList: Ingredient[] = [
    new Ingredient('Eggs', 5),
    new Ingredient('Bacon', 1),
  ];

  getShoppingLists() {
    return this.shoppingList.slice();
  }

  addToShoppingList(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.shoppingListChanged.emit(this.shoppingList.slice());
  }

  updateShoppingList() {}

  removeShoppingList() {}
}
