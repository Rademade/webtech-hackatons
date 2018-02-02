import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRouting } from './app-routing.module';
import { ListModule } from './list/list.module';
import { SignModule } from './sign/sign.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ListModule,
    SignModule,
    RouterModule.forRoot(appRouting)
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
