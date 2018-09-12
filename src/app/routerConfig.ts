import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [

  { path: 'user-list',
    component: UserComponent
  }
  ,
 { path: '',
    component: LoginComponent
  }
];
