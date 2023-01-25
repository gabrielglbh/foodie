import { Component } from '@angular/core';
import { Ingredient } from '../../domain/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Eggs', 5),
    new Ingredient('Bacon', 1),
  ];

  onAddedIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
