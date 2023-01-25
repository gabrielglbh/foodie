import { Ingredient } from './../../domain/ingredient.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent {
  @Input() ingredients: Ingredient[] = [];
}
