import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/User';
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
      console.log(user.userLogin)
      console.log(user.userPass)
      return this.http.post<User>(this.url + "/registernewuser", user);
    }
}
