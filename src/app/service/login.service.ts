import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.apiUrl + "/login";
s
  constructor(private http: HttpClient) { }


  login(user: User){

    console.log(user.UserName);
    console.log(user.UserPass);
    console.log(this.url + "/postlogin");

    return this.http.post<User>(this.url + "/postlogin", user);
 
  }
}
