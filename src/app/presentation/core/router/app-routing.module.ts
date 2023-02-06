import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

type PathMatch = 'full' | 'prefix' | undefined;

const routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' as PathMatch },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
