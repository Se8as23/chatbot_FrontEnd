import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(name : string, password: string): any {
    return this.http.get<any>(`${environment.api}medicos/login/${name}/${password}`);
  }

  public authenticated(): boolean{
    return localStorage.getItem('token') !== null;
  }
}
