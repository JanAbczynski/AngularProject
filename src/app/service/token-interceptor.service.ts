import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  // constructor() { }
  constructor(public jwtHelper: JwtHelperService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const idToken = localStorage.getItem("token");

    if (idToken){
      const cloned = req.clone({
        headers: req.headers.set("Authorization", 
        "Bearer " + idToken)
      });
      return next.handle(cloned);
    }
    else {
       return next.handle(req)
    }
  }

  public isAuthenticated (): boolean{
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token)
  }
}
