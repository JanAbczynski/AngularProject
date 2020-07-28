import { User } from '../models/User';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './../service/login.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  url = environment.apiUrl + "/login";
  user: User;
  showChangePassForm  = false;
  passForm = new FormGroup({
    oldPass: new FormControl('c',Validators.compose([Validators.required])),
    pass1: new FormControl('1',Validators.compose([Validators.required])),
    pass2: new FormControl('2',Validators.compose([Validators.required]))  
  });

  constructor(
    private http: HttpClient,
    private loginService: LoginService
    ) { }

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

  runChangePasswordForm(){
    console.log("run")
    this.showChangePassForm  = true;
  }

  onSubmit(){
    var body = {
      "userPass": this.passForm.value.pass1,
      "oldPass": this.passForm.value.oldPass,
      "token": localStorage.getItem("token")
    }


    this.loginService.ChangePassword2(body)
    .subscribe(x => {
      console.log(x)
    })
  }

  ngOnInit() {
    this.GetData();
  }

}
