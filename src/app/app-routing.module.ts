import { Routes } from "@angular/router";
import { AppGuard } from "./app.guard";

import { ListComponent } from "./list/list.component";
import { SignComponent } from "./sign/sign.component";

export const appRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        canActivate: [AppGuard],
        component: ListComponent
      },
      {
        path: 'sign',
        component: SignComponent
      }
    ]
  }

];