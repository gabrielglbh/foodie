import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/domain/ingredient.model';

export class ShoppingListService {
  shoppingListChanged = new Subject<Ingredient[]>();
  ingredientEdit = new Subject<number>();

  private shoppingList: Ingredient[] = [];

  getShoppingLists() {
    return this.shoppingList.slice();
  }

  getShoppingListItem(index: number) {
    return this.shoppingList[index];
  }

  addToShoppingList(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  editToShoppingList(index: number, ingredient: Ingredient) {
    this.shoppingList[index] = ingredient;
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
