import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, AbstractControl, FormControl, Validators, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { RegisterService } from './../service/register.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../models/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators'
import { Observable, of } from 'rxjs';




@Component({
  
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userModel = new User ('Name', 'qwe', 'a@2', null, null)
  isPasswordSame = true;
  control = true;
  test = "clear"
  public form: FormGroup;
  loginForm: FormGroup;
  
  

  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder) {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required)
    })

   }


  registerForm(user: any){
    console.log("form: ")
    console.log("pass", user.UserPass)
    console.log("pass2 ",user.UserPass2)
    this.validatePassword(user)

    this.registerService.register(user)
    .subscribe(
      res => {
        console.log("sub: ", res)
      }
    )
  }


  validatePassword(user: any){
    console.log("validate pass") 
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
        console.log(value1)
        console.log(value2)
        if(value1 == value2)
        {  
          resolve()
        }
      },3000))
}

  ComparePass(){
    console.log("compare password WORKS!")   
  }


    // 
    // setTimeout(x => {
    //   let value2 = stringToCompare;
    //   if(value1 == value2){  
    //     console.log("TRUE")    
    //     return new Promise((resolve) => {resolve})
    //   }
    // }, 1000)
    
    // return new Promise((resolve, reject) => {
    //   setTimeout(reject, 3500)
    //   }
    // ) 
  




  validatePasswordx(user: any){
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



  register(
    regName: string,
    regPass: string){

      // console.log("regname: ", regName, ", reg pass: ", regPass)
      var user: User;

      user = {
        UserLogin: regName,
        UserPass: regPass,
        UserMail: '1@1.1',
        token: null,
        Id: null
      }

      this.registerService.register(user)
      .subscribe(
        res => {
          console.log(res)
        }
      )
    }

  onNameChange(user: any){      
      this.test = user.UserPass2;
    }



  ngOnInit() {   
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      username: ['',
        [Validators.required],
        [CustomValidator.username]
      ]
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
      console.log(control.invalid)
      const username = control.value.toLowerCase();
      console.log(control)
      return null;
    }
  
  }

  public validate():boolean{
    return true
  }

  static MyValidator(): AsyncValidatorFn{
    console.log('control')
    return (control: AbstractControl):Observable <ValidationErrors | null > => {
      console.log('control 2')
      console.log(control)  
      return of({myErr: true})
    }
  }


}