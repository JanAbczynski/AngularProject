import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  url = environment.apiUrl + "/login";
  user: User;

  constructor(private http: HttpClient) { }

  public GetData(){

    let token = localStorage.getItem("token").toString();
    let totoken = this.getDecodedAccessToken(token)
    let userInfo = {"tokenCode": token}
    this.http.post<User>(this.url + "/GetUsersData", userInfo)
    .subscribe(response => {
      this.user = response;
      console.log('response:', response)
    })
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  ngOnInit() {
    this.GetData();
  }

}
