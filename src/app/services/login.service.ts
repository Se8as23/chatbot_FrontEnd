import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { environment } from '../../environment/environment';
import { Register } from '../model/Register.';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(name : string, password: string): any {
    return this.http.get<any>(`${environment.api}medicos/login/${name}/${password}`);
  }

  public register(doctor: Register): any {
    console.log(doctor);
    return this.http.post<any>(`${environment.api}medicos/save`, doctor);
  }

  public authenticated(): boolean{
    return localStorage.getItem('token') !== null;
  }
}
