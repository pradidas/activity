import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './user.model';
import { Log } from './log.model';

@Injectable()
export class UserserviceService {
  message:string;

selectedEmployee : Employee;
employeeList : Employee[];
selectedLog : Log;
logList : Log[];

  constructor(private http : Http) { }

  getEmployeeList(){
    this.http.get('http://localhost:5000/employees')
    .map((data : Response) =>{
      return data.json() as Employee[];
    }).toPromise().then(x => {
      this.employeeList = x;
     // console.log(this.employeeList);
    })
  }

  logInauth(emp : Log){
    var body = JSON.stringify(emp);
    //console.log(body);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:5000/login',body,requestOptions).map(x => x.json());
  }


  addUser(user : Employee){
    var body = JSON.stringify(user);
    //console.log(body);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:5000/employees',body,requestOptions).map(x => x.json());
  
  }

  deleteUser(id: number) {
    return this.http.delete('http://localhost:5000/employees/' + id).map(res => res.json());
  }

}
