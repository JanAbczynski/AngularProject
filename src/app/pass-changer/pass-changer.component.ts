import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { LoginService } from './../service/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-pass-changer',
  templateUrl: './pass-changer.component.html',
  styleUrls: ['./pass-changer.component.css']
})
export class PassChangerComponent implements OnInit {

  // code: Code;
  isReadyToChange = false
  passForm = new FormGroup({
    pass1: new FormControl('1',Validators.compose([Validators.required])),
    pass2: new FormControl('2',Validators.compose([Validators.required])),
    changeCode: new FormControl('c',Validators.compose([Validators.required]))
  });

  constructor(
    private activatedRoute: ActivatedRoute, 
    private loginService: LoginService
    ) {
     }

  onSubmit(){
    var body = {
      "userPass": this.passForm.value.pass1,
      "code": this.passForm.value.changeCode
    }


    this.loginService.ChangePassword(body)
    .subscribe(x => {
      console.log(x)
    })

  }


  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe(params => {
        var code = params['code'];
        console.log(params)
        var codeModel = {"Code": code}
        this.loginService.TryToChangePass(codeModel)
        .subscribe( x => {
          code = x;
          console.log(code.codeForChange);
          console.log(code.status);
          this.isReadyToChange = true;
          this.passForm.patchValue({changeCode: codeModel.Code})
        })
      });
  }

}

// export class Code{

//     value: string;

//   constructor(){}

// }
