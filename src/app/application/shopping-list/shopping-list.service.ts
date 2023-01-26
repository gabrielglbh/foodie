import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/domain/ingredient.model';

export class ShoppingListService {
  shoppingListChanged = new Subject<Ingredient[]>();

  private shoppingList: Ingredient[] = [
    new Ingredient('Eggs', 5),
    new Ingredient('Bacon', 1),
  ];

  getShoppingLists() {
    return this.shoppingList.slice();
  }

  addToShoppingList(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  clearShoppingList() {
    this.shoppingList = [];
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  removeFromShoppingList(ingredient: Ingredient) {
    const index = this.shoppingList.indexOf(ingredient, 0);
    if (index > -1) {
      this.shoppingList.splice(index, 1);
    }
    this.shoppingListChanged.next(this.shoppingList.slice());
  }
}
