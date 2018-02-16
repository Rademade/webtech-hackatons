import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SignComponent } from './sign/sign.component';
import { AppGuard } from './app.guard';

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
