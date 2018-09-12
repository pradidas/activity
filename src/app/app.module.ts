import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'
import { appRoutes } from './routerConfig';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TopComponent } from './top/top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserserviceService } from './user/shared/userservice.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TopComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
