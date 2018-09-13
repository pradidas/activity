import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { UserserviceService } from '../shared/userservice.service';
import { Employee } from '../shared/user.model';
import { TopComponent } from '../../top/top.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private userService : UserserviceService, private route : Router) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
   
    if (form.value.uname != '') {
     
     this.userService.logInauth(form.value)
       .subscribe(data => {
       
         

          //this.resetForm(form);
         // this.userService.getEmployeeList();
          //this.toastr.success('New Record Added Succcessfully', 'Employee Register');

        })
    }
    
  }


}
