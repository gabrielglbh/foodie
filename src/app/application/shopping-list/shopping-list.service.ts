import { Ingredient } from 'src/app/domain/ingredient.model';

export class ShoppingListService {
  private shoppingList: Ingredient[] = [
    new Ingredient('Eggs', 5),
    new Ingredient('Bacon', 1),
  ];

  getShoppingLists() {
    return this.shoppingList.slice();
  }

  addShoppingList() {}

  updateShoppingList() {}

  removeShoppingList() {}
}
