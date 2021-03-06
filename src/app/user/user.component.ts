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
    msg : string;
  ngOnInit() {
    this.userService.getEmployeeList();
  // console.log('u');
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userService.deleteUser(id)
      .subscribe(x => {
        //console.log(x.affectedRows);
        if(x.affectedRows>=1){
          this.msg = "Record Successfully deleted";
        }
        this.userService.getEmployeeList();
        //this.toastr.warning("Deleted Successfully","Employee Register");
      })
    }
  }



}
