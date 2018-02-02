import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ListComponent,
    ItemComponent
  ],
  exports: [
    ListComponent,
    ItemComponent
  ]
})
export class ListModule { }
