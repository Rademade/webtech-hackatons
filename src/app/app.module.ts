import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ListModule } from './list/list.module';
import { SignModule } from './sign/sign.module';

import { appRouting } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppGuard } from './app.guard';

@NgModule({
  imports: [
    BrowserModule,
    ListModule,
    SignModule,
    RouterModule.forRoot(appRouting)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AppGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
