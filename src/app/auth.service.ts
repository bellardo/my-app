import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login() {
    return this.http.post('http://localhost:3000/login', {username: 'aclave', password: 'Pass1234'}); 

  }

  logout() {
    localStorage.removeItem('token');

  }

  userLogged() {
    if (localStorage.getItem('token'))
      return true;
    else return false;

  }

  updateSession(token) {
    if (token)
      localStorage.setItem('token', token);
    else localStorage.removeItem('token');

  }

}
