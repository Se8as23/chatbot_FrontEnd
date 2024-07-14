import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(user: any){
    return this.http.get('http://localhost:3000/login', user);
  }

  public authenticated(): boolean{
    return localStorage.getItem('token') !== null;
  }
}
