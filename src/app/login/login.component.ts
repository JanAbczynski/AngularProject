import { User } from '../models/User';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private invalidLogin = false;
  constructor(
    private router: Router,
    private loginService: LoginService) { }




  ngOnInit() {
  }

  login(name: string, pass: string){
    // console.log("login: " + name + " pass: " + pass)

    var user: User;
    user =
    {
     Id: null,
     userType: null,
     userLogin: name,
     userPass: pass,
     userName: null,
     userSureName: null,
     userTaxNumber: null,
     userAddress: null,
     userCity: null,
     userZipCode: null,
     userMail: null,
     userPhoneNumber: null,
     userPhoneNumber2: null,
     userRole: null,
     token: null,
    }


    this.loginService.login(user)
    .subscribe(
      res =>
      {
        localStorage.setItem("token", res.token)

        this.router.navigate(['/userWork'])
      },
      (error: Response) =>
      {
        console.log("error409")
          if(error.status === 409)
          {
            console.log("409")
          this.setAlertField();
          } else
          {
            alert("error");
          }
      }
    )

  }

  logout(){

  }

  setAlertField(){
    this.invalidLogin = true;
    setTimeout(() => {
    this.invalidLogin = false;
    }, 2000)

  }

}
