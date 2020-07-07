import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './../models/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = environment.apiUrl + "/login";

  constructor(    
    private http: HttpClient,
    private router: Router
    ) { }

    public register (user: User){
      console.log("service:")
      console.log(user.UserLogin)
      console.log(user.UserPass)
      return this.http.post<User>(this.url + "/registernewuser", user);
    }
}
