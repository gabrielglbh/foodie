import { RecipeService } from './../../../application/recipes/recipes.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../../../domain/recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipService.getRecipes();
  }
}
