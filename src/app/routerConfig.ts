import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './user/adduser/adduser.component';

export const appRoutes: Routes = [
  
 { path: '',
    component: LoginComponent
  },
  { path: 'user-list',
    component: UserComponent
  }
  ,{ path: 'add-user',
  component: AdduserComponent
}

];
