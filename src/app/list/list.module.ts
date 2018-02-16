import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ItemComponent } from './item/item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListService } from './list.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ListComponent,
    ItemComponent
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
