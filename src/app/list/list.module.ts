import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import {ListComponent} from "./list.component";
import {ItemComponent} from "./item/item.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
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
