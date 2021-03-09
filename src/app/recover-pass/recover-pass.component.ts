import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './../service/login.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.css']
})
export class RecoverPassComponent implements OnInit {

  isReady = false
  isInfo = false
  infoQuality = false;
  profileForm = new FormGroup({
    email: new FormControl('',
      Validators.compose(
        [Validators.email, Validators.required]
      ))
  });

  constructor(
    private router: Router,
    private loginService: LoginService) { }

  onSubmit(){
    console.log("submit")
    var userMail = this.profileForm.value.email;
    this.sendRequestForPassword(userMail)
  }

  sendRequestForPassword(userMail: string){
   var user = {'UserMail': userMail}
   console.log(user)
    this.loginService.RemindPassword(user)
    .subscribe(res => {
      this.isReady = true
      this.isInfo = true
      this.infoQuality = true
    },
      (error: Response) => {
        if(error.status == 404){
          this.isInfo = true
          this.infoQuality = false
        }
      }
    )
  }



  ngOnInit() {

  }

}
