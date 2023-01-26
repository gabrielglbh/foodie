import { Recipe } from 'src/app/domain/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/application/recipes/recipes.service';

@Component({
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  recipeToEdit: Recipe;

  constructor(
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) =>
      this.checkParams(params['id'])
    );
  }

  private checkParams(param: string) {
    if (param != undefined) {
      this.recipeToEdit = this.recipeService.getRecipe(param);
    }
  }
}
