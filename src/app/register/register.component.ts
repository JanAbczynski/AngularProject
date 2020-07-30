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


  userModel = new User (null, null, null, null, null, null, null, null, null, null, null, null, null, )
  isPasswordSame = true;
  control = true;
  test = "clear"
  public form: FormGroup;
  loginForm: FormGroup;
  errorMessage: String;
  
  

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private fb: FormBuilder) {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required)
    })

   }

   onSubmit(){
     console.log("SUBMIT")
     let x = this.loginForm.controls.UserMail.value
     console.log(x)
     var user: User
     user = {
       Id: null,
      userLogin: this.loginForm.controls.UserLogin.value,
      userPass: this.loginForm.controls.UserPass.value,
      userName: this.loginForm.controls.UserName.value,
      userSureName: this.loginForm.controls.UserSureName.value,
      userAddress: this.loginForm.controls.UserAddress.value,
      userCity: this.loginForm.controls.UserCity.value,
      userZipCode: this.loginForm.controls.UserZipCode.value,
      userMail: this.loginForm.controls.UserMail.value,
      userPhoneNumber: this.loginForm.controls.UserPhoneNumber.value,
      userPhoneNumber2: this.loginForm.controls.UserPhoneNumber2.value,
      userRole: 'role',
      token: null,
     }

     this.registerForm(user)
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
        this.router.navigate(['/userDetail'])
      }, 
      (error: Response) => {
        if(error.status === 404){
          console.log(error)
          this.errorMessage = "error.error";       
          console.log(this.errorMessage)
          // alert("404");
        } else {
          alert("ERROR unxpected");
        console.log("ERROR unxpected");        
        }
      } 
    );
    
  }


  validatePasswordx(user: any){
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
          console.log(res)
        }
      )
    }

  onNameChange(user: any){      
      this.test = user.UserPass2;
    }



  ngOnInit() {   
    this.loginForm = this.fb.group({
      UserLogin: ['john'],
      UserPass: ['qwe'],
      UserPass2: ['qwe'],
      UserName: ['name'],
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