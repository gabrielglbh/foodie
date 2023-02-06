import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailsNotFoundComponent } from './recipe-details-not-found/recipe-details-not-found.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AppRoutingModule } from '../core/router/app-routing.module';
import { RecipesRoutingModule } from '../core/router/recipes-routing.module';
import { SharedModule } from '../core/modules/shared.module';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    RecipeDetailsNotFoundComponent,
    RecipeEditComponent,
  ],
  imports: [SharedModule, AppRoutingModule, RecipesRoutingModule],
})
export class RecipesModule {}
