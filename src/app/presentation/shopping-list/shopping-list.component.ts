import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/application/shopping-list/shopping-list.service';
import { Ingredient } from '../../domain/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getShoppingLists();
  }

  onAddedIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
