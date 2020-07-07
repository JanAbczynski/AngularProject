import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public loginService: LoginService) { }

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
