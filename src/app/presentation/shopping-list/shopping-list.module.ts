import { ShoppingListRoutingModule } from './../core/router/shopping-list-routing.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../core/router/app-routing.module';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../core/modules/shared.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [SharedModule, AppRoutingModule, ShoppingListRoutingModule],
})
export class ShoppingListModule {}
