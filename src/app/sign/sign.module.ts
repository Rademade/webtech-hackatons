import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { SignComponent } from './sign.component';
import {SignService} from "./sign.service";

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    SignService
  ],
  declarations: [
    SignComponent
  ],
  exports: [
    SignComponent
  ]
})
export class SignModule { }