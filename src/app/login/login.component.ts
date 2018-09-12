import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import { UserserviceService } from '../user/shared/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserserviceService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.uname != '') {
     // console.log(form.value);
     this.userService.logInauth(form.value)
       .subscribe(data => {
         if(data.length>=1) {

         }
         else {
           
         }
          //this.resetForm(form);
         // this.userService.getEmployeeList();
          //this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        })
    }
    
  }

}
