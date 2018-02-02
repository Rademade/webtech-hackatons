import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { appRouting } from "./app-routing.module";
import { ListModule } from "./list/list.module";
import { SignModule } from "./sign/sign.module";

import { AppComponent } from './app.component';
import { AppGuard } from "./app.guard";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting),
    ListModule,
    SignModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    AppGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }