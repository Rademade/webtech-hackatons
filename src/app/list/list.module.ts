import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ItemComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListService } from './list.service';
import { HttpModule } from '@angular/http';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ListComponent,
    ItemComponent,
    InputComponent
  ],
  providers: [
    ListService,
  ],
  exports: [
    ListComponent,
    ItemComponent
  ]
})

export class ListModule { }
