import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  confiramtionStatus: progressStatus = progressStatus.waiting;

  constructor(
    private activatedRoute: ActivatedRoute,
    private registerService: RegisterService
  )
  {

  }

  ngOnInit() {
    console.log("init");
    this.activatedRoute.params.subscribe(params => {
      this.SendCode(params.code);
    })
  }



  SendCode(code: String){
    console.log("send" + code);
    this.registerService.ValidateCode(code)
    .subscribe(
      res => {
      this.confiramtionStatus = progressStatus.success;
      console.log(res);
      console.log("res");
      }, (error: Response) => {
        if(error.status===409){
          this.confiramtionStatus = progressStatus.fail;
        } else {
          this.confiramtionStatus = progressStatus.fail;
        }
      }
    )
  }
}


export enum progressStatus{
  waiting,
  success,
  fail
}
