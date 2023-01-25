import { ShoppingListService } from './../../../application/shopping-list/shopping-list.service';
import { Ingredient } from './../../../domain/ingredient.model';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient() {
    this.shoppingListService.addToShoppingList(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      )
    );
  }

  onClearShoppingList() {
    this.shoppingListService.clearShoppingList();
  }
}
