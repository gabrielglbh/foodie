import { Subscription } from 'rxjs';
import { ValidatorService } from './../../../application/validators/validators.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recipe } from 'src/app/domain/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from 'src/app/application/recipes/recipes.service';

@Component({
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeToEdit: Recipe;
  recipeToEditIndex: number;
  recipeForm: FormGroup;
  observer: Subscription;

  constructor(
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private validatorService: ValidatorService
  ) {}

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  ngOnDestroy(): void {
    this.observer.unsubscribe();
  }

  ngOnInit(): void {
    this.observer = this.recipeService.recipeEdit.subscribe((index) => {
      this.recipeToEditIndex = index;
    });

    this.activeRoute.params.subscribe((params) => {
      if (params['id'] != undefined) {
        this.recipeToEdit = this.recipeService.getRecipe(params['id']);
      }
      this.populateForm(this.recipeToEdit);
    });
  }

  private populateForm(recipe: Recipe) {
    let name = '';
    let description = '';
    let imagePath = '';
    let ingredients = new FormArray([]);

    if (recipe != null) {
      recipe.ingredients.forEach((i) => {
        ingredients.push(
          new FormGroup({
            name: new FormControl(i.name, Validators.required),
            amount: new FormControl(i.amount, [
              Validators.required,
              this.validatorService.nonValidAmount.bind(this),
            ]),
          })
        );
      });

      name = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      description: new FormControl(description, Validators.required),
      imagePath: new FormControl(imagePath),
      ingredients: ingredients,
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(1, [
          Validators.required,
          this.validatorService.nonValidAmount.bind(this),
        ]),
      })
    );
  }

  onAddRecipe() {
    if (this.recipeToEdit == null) {
      this.recipeService.addRecipe(
        new Recipe(
          this.recipeForm.value['name'],
          this.recipeForm.value['description'],
          this.recipeForm.value['imagePath'],
          this.recipeForm.value['ingredients']
        )
      );
    } else {
      this.recipeService.editRecipe(
        this.recipeToEditIndex,
        new Recipe(
          this.recipeForm.value['name'],
          this.recipeForm.value['description'],
          this.recipeForm.value['imagePath'],
          this.recipeForm.value['ingredients']
        )
      );
    }
    this.onExit();
  }

  removeIngredient(ingredientIndex: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(ingredientIndex);
  }

  onExit() {
    let name = this.recipeForm.value['name'];
    this.router.navigate(['recipes', name]);
  }
}
