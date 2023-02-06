import { RecipesResolverService } from '../../../application/resolvers/recipe-resolver.service';
import { RecipeEditComponent } from '../../recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from '../../recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from '../../recipes/recipes.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeDetailsNotFoundComponent } from '../../recipes/recipe-details-not-found/recipe-details-not-found.component';

const routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeDetailsNotFoundComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
