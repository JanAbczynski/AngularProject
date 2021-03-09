import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { LoginService } from './../service/login.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-pass-changer',
  templateUrl: './pass-changer.component.html',
  styleUrls: ['./pass-changer.component.css']
})
export class PassChangerComponent implements OnInit {

  // code: Code;
  passsTheSame:boolean = false;
  isReadyToChange = false
  passForm = new FormGroup({
    pass1: new FormControl('1',Validators.compose([Validators.required])),
    pass2: new FormControl('2',Validators.compose([Validators.required])),
    changeCode: new FormControl('c',Validators.compose([Validators.required]))
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private fb: FormBuilder
    ) {
     }

  onSubmit(){
    var body = {
      "userPass": this.passForm.value.pass1,
      "code": this.passForm.value.changeCode
    }
    this.loginService.ChangePassword(body)
    .subscribe(x => {
    })
  }

  OnChanges(){
    this.passForm.valueChanges.subscribe(val => {
      this.passsTheSame = false;
      if(this.passForm.value.pass1 == this.passForm.value.pass2){
        this.passsTheSame = true;
      }
    })
  }


  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.params.subscribe(params => {
        console.log(params.code);
        this.passForm = this.fb.group({
          pass1: ['john', [
            Validators.required]],
          pass2: ['john2', [
            Validators.required]],
          changeCode: [params.code],
        })
      });

      this.OnChanges();
  }

}
