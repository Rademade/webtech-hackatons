import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignComponent } from './sign.component';
import { SignService } from './sign.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignComponent
  ],
  providers: [
    SignService
  ],
  exports: [
    SignComponent
  ]
})
export class SignModule { }
