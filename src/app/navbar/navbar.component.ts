import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    public loginService: LoginService) { }


    authTest(){

      this.http.get("https://localhost:44336/api/Competition/test")
      .subscribe(
        res => {
          console.log("sub: ", res)
          // this.router.navigate(['/login'])
        })


      console.log("authTest2")
      return this.http.get("https://localhost:44336/api/login/test");
    }


  ngOnInit() {
  }

  // login(){
  //   this.router.navigate(['/login']);
  // }


  // logout(){
  //   console.log("navbar logout");
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/']);
  // }

}
