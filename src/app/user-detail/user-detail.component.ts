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
  displayData  = false;
  wrongPassMessage = false;
  passwordWasChanged = false;
  editUserDate = false;
  passForm = new FormGroup({
    oldPass: new FormControl('c',Validators.compose([Validators.required])),
    pass1: new FormControl('1',Validators.compose([Validators.required])),
    pass2: new FormControl('2',Validators.compose([Validators.required]))
  });

  userDataForm = new FormGroup({

    userName: new FormControl(),
    userSureName: new FormControl(),
    userAddress: new FormControl(),
    userCity: new FormControl(),
    userZipCode: new FormControl(),
    userMail: new FormControl(),
    userPhoneNumber: new FormControl(),
    userPhoneNumber2: new FormControl()
  })

  constructor(
    private http: HttpClient,
    private loginService: LoginService
    ) { }

  public GetData(){

    let token = localStorage.getItem("token").toString();
    let totoken = this.getDecodedAccessToken(token)
    let userInfo = {"tokenCode": token}
    this.http.post<User>(this.url + "/GetUsersData", userInfo)
    .subscribe((res: User) => {
      this.user = res;
      this.FillUpForm(res)
      this.displayData = true;
    })
  }

  FillUpForm(user: User){
    this.userDataForm.controls['userName'].setValue(user.userName);
    this.userDataForm.controls['userSureName'].setValue(user.userSureName);
    this.userDataForm.controls['userAddress'].setValue(user.userAddress);
    this.userDataForm.controls['userCity'].setValue(user.userCity);
    this.userDataForm.controls['userZipCode'].setValue(user.userZipCode);
    this.userDataForm.controls['userMail'].setValue(user.userMail);
    this.userDataForm.controls['userPhoneNumber'].setValue(user.userPhoneNumber);
    this.userDataForm.controls['userPhoneNumber2'].setValue(user.userPhoneNumber2);
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
    this.showChangePassForm  = true;
  }

  RunEditUserData(){
    this.editUserDate = true;
  }

  onSubmitPassChange(){
    var body = {
      "userPass": this.passForm.value.pass1,
      "oldPass": this.passForm.value.oldPass,
      "token": localStorage.getItem("token")
    }

    // console.log("xxx");

    this.loginService.ChangePassword(body)
    .subscribe(x => {
      this.wrongPassMessage = false;
      this.passwordWasChanged = true;
      this.showChangePassForm = false;
    }, (error: Response) => {
     if(error.status == 401){
      this.wrongPassMessage = true;
     }
    })
  }

  ngOnInit() {
    this.GetData();
  }

}
