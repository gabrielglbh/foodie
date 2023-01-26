import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/application/shopping-list/shopping-list.service';
import { Ingredient } from '../../domain/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  observer: Subscription;
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {
    this.observer = this.shoppingListService.shoppingListChanged.subscribe(
      (args) => (this.ingredients = args)
    );
  }
  ngOnDestroy(): void {
    this.observer.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getShoppingLists();
  }
}
