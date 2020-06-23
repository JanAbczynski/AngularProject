import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '@auth0/angular-jwt


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
}
