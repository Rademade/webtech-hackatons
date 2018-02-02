import { Routes} from '@angular/router';
import { ListComponent } from './list/list.component';
import { SignComponent } from './sign/sign.component';


export const appRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'sign',
        component: SignComponent
      }
    ]
  }
];
