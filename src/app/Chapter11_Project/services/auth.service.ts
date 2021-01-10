import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
       .map(response => {
          // console.log(response.json())// for checking the token receive
          let result = response.json();
          if (result && result.token) {
            localStorage.setItem('token', result.token);
            return true;            
          }
          return false;
       });
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
     return tokenNotExpired();
// bellow code only for training all functionality inside above function
    // let jwtHelper = new JwtHelper();// Imported from 'angular2-jwt'
    // let token = localStorage.getItem('token')

    // if(!token)// in case of no talken we will have an error 
    // return false;

    // let expirationDate = jwtHelper.getTokenExpirationDate(token)
    // let isExpired = jwtHelper.isTokenExpired(token);

    //   console.log("Expiration: ", expirationDate);
    //   console.log("isExpired: ", isExpired);

    // return !isExpired;
  }
  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;

    // let jwtHelper = new JwtHelper();
    // return jwtHelper.decodeToken(token);
    return new JwtHelper().decodeToken(token);

  }
}

