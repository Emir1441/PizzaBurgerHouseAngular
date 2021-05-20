import { HttpClient } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from 'src/environments/environment';
import { Login } from '../models/model';







@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userName = localStorage.getItem("userName");
  userInfo: any

  invalidLogin: boolean;


  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }




  login(login: Login) {
    return this.http.post(`${environment.ApiUrl}/api/auth/login/`, login)
      .subscribe(res => {

        console.log(this.userInfo = res)
        this.userInfo = res
        localStorage.setItem('jwt', this.userInfo.access_token)
        localStorage.setItem('userName', this.userInfo.username)

        this.invalidLogin = false;
        this.router.navigate(["admin/category"])
      }, error => {
        this.invalidLogin = true;
      })
  }



  isAuthenticated(): boolean {
    const token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }



  logout(): void {
    localStorage.removeItem('jwt');
  }

}
