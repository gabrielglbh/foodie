import { RecipeService } from './../../../application/recipes/recipes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../../../domain/recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  observer: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnDestroy(): void {
    this.observer.unsubscribe();
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.observer = this.recipeService.recipeAdded.subscribe(
      (recipes) => (this.recipes = recipes)
    );
  }
}
