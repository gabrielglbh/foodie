import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './presentation/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './presentation/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './presentation/header/header.component';
import { RecipeListComponent } from './presentation/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './presentation/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './presentation/recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './presentation/recipes/recipes.component';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
