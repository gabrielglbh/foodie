import { SharedModule } from './presentation/core/modules/shared.module';
import { ShoppingListModule } from './presentation/shopping-list/shopping-list.module';
import { RecipesModule } from './presentation/recipes/recipes.module';
import { RecipeService } from 'src/app/application/recipes/recipes.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './presentation/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from './application/shopping-list/shopping-list.service';
import { IngredientsComponent } from './presentation/ingredients/ingredients.component';
import { AppRoutingModule } from './presentation/core/router/app-routing.module';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ValidatorService } from './application/validators/validators.service';
import { CustomUppercasePipe } from './presentation/core/pipes/custom-uppercase.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientsComponent,
    CustomUppercasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
  ],
  providers: [ShoppingListService, ValidatorService, Router, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
