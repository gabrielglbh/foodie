import { ShoppingListComponent } from '../../shopping-list/shopping-list.component';
import { RecipesComponent } from '../../recipes/recipes.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

type PathMatch = 'full' | 'prefix' | undefined;

const routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' as PathMatch },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
