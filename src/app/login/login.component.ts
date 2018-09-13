import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import { UserserviceService } from '../user/shared/userservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 msg: string;
  constructor(private userService: UserserviceService, private route:Router) { }

  ngOnInit() {
    this.msg=this.userService.message;
    
  }


  onSubmit(form: NgForm) {
   
    if (form.value.uname != '') {
     
     this.userService.logInauth(form.value)
       .subscribe(data => {
       
         if(data.length>=1) {
           let sess;
          localStorage.setItem(sess, data[0].uname);
           this.route.navigate(['/user-list']);

         } else {
        
           this.msg="Please check Username & Password";
           console.log(this.msg);
           form.reset();
           
         }

          //this.resetForm(form);
         // this.userService.getEmployeeList();
          //this.toastr.success('New Record Added Succcessfully', 'Employee Register');

        })
    }
    
  }

}
