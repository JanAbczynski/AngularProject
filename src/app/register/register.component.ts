import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, AbstractControl, FormControl, Validators, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { RegisterService } from './../service/register.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';




@Component({

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userModel = new User (null, null,null, null, null, null, null, null, null, null, null, null, null, null, null)
  isPasswordSame = true;
  control = true;
  test = "clear"
  registerFinished = false
  public form: FormGroup;
  loginForm: FormGroup;
  errorMessage: String;
  userType: String = "person"



  constructor(
    private router: Router,
    private registerService: RegisterService,
    private fb: FormBuilder
    ) {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required)
    })

   }

   onSubmit(){
     var user: User
     user = {
      Id: null,
      userType: null,
      userLogin: this.loginForm.controls.UserLogin.value,
      userPass: this.loginForm.controls.UserPass.value,
      userName: this.loginForm.controls.UserName.value,
      userSureName: this.loginForm.controls.UserSureName.value,
      userTaxNumber: this.loginForm.controls.UserTaxNumber.value,
      userAddress: this.loginForm.controls.UserAddress.value,
      userCity: this.loginForm.controls.UserCity.value,
      userZipCode: this.loginForm.controls.UserZipCode.value,
      userMail: this.loginForm.controls.UserMail.value,
      userPhoneNumber: this.loginForm.controls.UserPhoneNumber.value,
      userPhoneNumber2: this.loginForm.controls.UserPhoneNumber2.value,
      userRole: 'role',
      token: null,
     }
     user.userType = this.userType.toString();
     this.registerForm(user)
   }


  registerForm(user: any){

    this.validatePassword(user)

    this.registerService.register(user)
    .subscribe(
      res => {
        this.errorMessage = null;
        this.registerFinished =true
        setTimeout(() => {this.router.navigate(['/'])},15000)

      },
      (error: Response) => {
        if(error.status === 409){
          console.log(error)
          this.errorMessage = JSON.parse(JSON.stringify(error)).error;
        } else {
          alert("ERROR unxpected");
        }
      }
    );

  }

  test2(){
  }


  validatePasswordx(user: any){
    this.check(user)
    .then(x => {
      this.ComparePass()
    })
  }


  check(user: any): Promise<boolean> {
    let value1 = user.UserPass2;
    return new Promise( resolve =>
      setTimeout(() =>
      {
        let value2 = user.UserPass2;

        if(value1 == value2)
        {
          // resolve()
        }
      },3000))
}

  ComparePass(){

  }


  validatePassword(user: any){
    this.isPasswordSame = true
    let value1 = user.Pass2;
    setTimeout(x => {
      let value2 = user.Pass2;
      if(value1 == value2){
        let pass = user.UserPass;
        let pass2 = user.UserPass2;
        if (pass == pass2){
          this.isPasswordSame = true;
        } else {
          this.isPasswordSame = false;
        }
      }
    },3000)
  }

  runTest(){

  }



  register(user: User,
    regName: string,
    regPass: string){

      this.registerService.register(user)
      .subscribe(
        res => {
        },
        (error: Response) =>
        {
          console.log(error)
          console.log("error409")
            if(error.status === 409)
            {
              console.log("409")
            } else
            {
              alert("error");
            }
        }
      )
    }

  onNameChange(user: any){
      this.test = user.UserPass2;
    }

  SelectPrivate(){
    }

  onProfileChange(data: string){
    this.userType = data;
  }

  authTest(){
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      UserType: ['Option 1'],
      UserLogin: ['john'],
      UserPass: ['qwe'],
      UserPass2: ['qwe'],
      UserName: ['name'],
      UserTaxNumber: ['12333'],
      UserSureName: ['Sname'],
      UserAddress: ['address'],
      UserCity: ['city'],
      UserZipCode: ['zip'],
      UserMail: ['j.abc@wp.pl',[
        Validators.required,
        Validators.email]
      ],

      UserPhoneNumber: ['phone'],
      UserPhoneNumber2: ['phone2'],
      UserRole: ['role'],
    });
  }

  get email(){
    return this.loginForm.get('email')
  }
  get username(){
    return this.loginForm.get('username')
  }
}


// interface Validator<T extends FormControl> {
//   (c:T): {[error: string]:any};
// }

export class CustomValidator{

  static username(){
    return (control:AbstractControl) => {
      const username = control.value.toLowerCase();
      return null;
    }
  }

  public validate():boolean{
    return true
  }

  static MyValidator(): AsyncValidatorFn{
    return (control: AbstractControl):Observable <ValidationErrors | null > => {
      return of({myErr: true})
    }
  }
}


export enum userType{
  person,
  company
}
