import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { UserserviceService } from '../user/shared/userservice.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(private router:Router, private userve : UserserviceService) { }

  ngOnInit() {}

  ngAfterContentInit(){
    let sess;
    let session = (localStorage.getItem(sess));
   
    if(localStorage.getItem(sess)){
      console.log('Session value is ='+ session.length);
    }else{
      console.log('Session doesnot exist');
      this.userve.message='Session doesnot exist';
      this.router.navigate(['/']);
    }

  }
  
  logoutUser(){
    console.log('in the logout function');
    let sess;
   // console.log(localStorage.getItem(sess));
   localStorage.removeItem(sess);
   this.router.navigate(['/']);

  }
}
