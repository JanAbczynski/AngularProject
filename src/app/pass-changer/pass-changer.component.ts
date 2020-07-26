import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { LoginService } from './../service/login.service';


@Component({
  selector: 'app-pass-changer',
  templateUrl: './pass-changer.component.html',
  styleUrls: ['./pass-changer.component.css']
})
export class PassChangerComponent implements OnInit {

  code: Code;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private loginService: LoginService
    ) {


     }

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe(params => {
        var code = params['code'];
        
        var codeModel = {"Code": code}
        this.loginService.TryToChangePass(codeModel)
        .subscribe( x => {
          code = x;
          console.log(code.value.key);
        })




      });
  }

}

export class Code{

    value: string;

  constructor(){}

}
