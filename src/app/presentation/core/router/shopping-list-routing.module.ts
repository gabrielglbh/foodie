import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from '../../shopping-list/shopping-list.component';

const routes = [{ path: 'shopping-list', component: ShoppingListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
