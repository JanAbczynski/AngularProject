import { User } from './../models/user';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(name: string, pass: string){
    console.log("login: " + name + " pass: " + pass)

    var user: User;
    user = 
      {
        UserName: name,
        UserPass: pass
      }
    

    this.loginService.login(user)
    .subscribe(
      user => 
      {
        console.log(user)
      }, 
      (error: Response) => 
      {
          if(error.status === 404)
          {
            alert("error 404");
          } else 
          {
            alert("Wrong login or password");
          console.log("Wrong login or password");        
          }        
      }
    )

  }

}
