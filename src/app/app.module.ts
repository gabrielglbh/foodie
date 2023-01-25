import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './presentation/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './presentation/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './presentation/header/header.component';
import { RecipeListComponent } from './presentation/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './presentation/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './presentation/recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './presentation/recipes/recipes.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirectiveDirective } from './presentation/core/dropdown-directive/dropdown-directive.directive';
import { ShoppingListService } from './application/shopping-list/shopping-list.service';
import { IngredientsComponent } from './presentation/ingredients/ingredients.component';
import { AppRoutingModule } from './presentation/core/router/app-routing.module';
import { Router } from '@angular/router';
import { RecipeDetailsNotFoundComponent } from './presentation/recipes/recipe-details-not-found/recipe-details-not-found.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    DropdownDirectiveDirective,
    IngredientsComponent,
    RecipeDetailsNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MatIconModule],
  providers: [ShoppingListService, Router],
  bootstrap: [AppComponent],
})
export class AppModule {}
