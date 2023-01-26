import { Subscription } from 'rxjs';
import { ValidatorService } from './../../../application/validators/validators.service';
import { ShoppingListService } from './../../../application/shopping-list/shopping-list.service';
import { Ingredient } from './../../../domain/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  observer: Subscription;
  ingredientForm: FormGroup;
  isEditing: boolean = false;
  ingredientIndex: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private validatorService: ValidatorService
  ) {}

  ngOnDestroy(): void {
    this.observer.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredientForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.nullValidator,
      ]),
      amount: new FormControl(1, [
        Validators.required,
        this.validatorService.nonValidAmount.bind(this),
      ]),
    });

    this.observer = this.shoppingListService.ingredientEdit.subscribe(
      (index) => {
        this.isEditing = true;
        this.ingredientIndex = index;
        let ingredient = this.shoppingListService.getShoppingListItem(
          this.ingredientIndex
        );
        this.ingredientForm.setValue({
          name: ingredient.name,
          amount: ingredient.amount,
        });
      }
    );
  }

  onAddIngredient() {
    if (this.ingredientForm.valid) {
      if (this.isEditing) {
        this.shoppingListService.editToShoppingList(
          this.ingredientIndex,
          new Ingredient(
            this.ingredientForm.value['name'],
            this.ingredientForm.value['amount']
          )
        );
        this.isEditing = false;
      } else {
        this.shoppingListService.addToShoppingList(
          new Ingredient(
            this.ingredientForm.value['name'],
            this.ingredientForm.value['amount']
          )
        );
      }
      this.ingredientForm.setValue({
        name: '',
        amount: 1,
      });
    }
  }

  onClearShoppingList() {
    this.shoppingListService.clearShoppingList();
  }
}
