import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './shared/userservice.service'
import { Employee } from './shared/user.model';
import { TopComponent } from '../top/top.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserserviceService) { }

  ngOnInit() {
    this.userService.getEmployeeList();
  // console.log('u');
  }

}
