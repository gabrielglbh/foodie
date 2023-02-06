import { ShoppingListRoutingModule } from './../core/router/shopping-list-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../core/router/app-routing.module';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    ShoppingListRoutingModule,
  ],
})
export class ShoppingListModule {}
