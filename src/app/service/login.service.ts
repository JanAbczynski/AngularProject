import { userType } from './../register/register.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { stringify } from 'querystring';
import * as jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.apiUrl + "/login";
  isCompany = false;
  constructor(
    private http: HttpClient,
    private router: Router) { }


  login(user: User){


    // console.log(user);
    // console.log(user.UserName);
    // console.log(user.UserPass);
    // console.log(this.url + "/postlogin");

    return this.http.post<User>(this.url + "/postlogin", user);
 
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLogged(){
    
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token')

    if(token != null){

      if(jwt_decode(token).userType == "company"){
        this.isCompany = true;
      } else{
        this.isCompany = false;
      }

    }

    let expirationDate = jwtHelper.getTokenExpirationDate(token)
    let isExpired = jwtHelper.isTokenExpired(token);
    if(isExpired){localStorage.removeItem('token');}

    return !isExpired;
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if (!token){return null};
    // let jwtHelper = new JwtHelperService();


    let jwtHelper = new JwtHelperService();

    return jwtHelper.decodeToken(token).role;
    // return "admin";
  }

  RemindPassword(body: any){

    return this.http.post(this.url + "/PasswordReminderRequest", body);
  }

  TryToChangePass(body: any){

    return this.http.post(this.url + "/TryToChangePass", body);
  }

  ChangePassword(body: any){

    let stringedBody: string;
    stringedBody = JSON.stringify(body)
    return this.http.post(this.url + "/PassChanger", body);
  }

  ChangePassword2(body: any){

    let stringedBody: string;
    stringedBody = JSON.stringify(body)
    return this.http.post(this.url + "/PassChanger2", body);
  }


  testAuth(){
    var fullUrl = this.url + "/test"
    return this.http.get(fullUrl);

  }
}
