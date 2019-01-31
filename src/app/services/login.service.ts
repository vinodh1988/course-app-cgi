import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
httpOptions;
username:string;
password:string;
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': "Basic "+btoa("vinodh:password")
      })
   }
  }

  logMethod(data):Observable<Object>{
    //data object will contain username,password and granttype
    console.log(this.httpOptions);
  
    return this.http.post("http://162.241.222.49:8896/authorize/jwt",data,this.httpOptions);
  }
}
