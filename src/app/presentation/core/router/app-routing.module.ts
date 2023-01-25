import { RecipeDetailComponent } from './../../recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from '../../shopping-list/shopping-list.component';
import { RecipesComponent } from '../../recipes/recipes.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeDetailsNotFoundComponent } from '../../recipes/recipe-details-not-found/recipe-details-not-found.component';

type PathMatch = 'full' | 'prefix' | undefined;

const routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' as PathMatch },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeDetailsNotFoundComponent },
      { path: ':id', component: RecipeDetailComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
