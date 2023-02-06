import { DropdownDirective } from '../dropdown/dropdown.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropdownDirective],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [DropdownDirective, CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
