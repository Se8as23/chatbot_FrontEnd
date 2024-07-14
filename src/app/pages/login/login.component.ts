import { Component } from '@angular/core';
import { User } from '../../model/User';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user: User = new User();
  
  constructor(private loginService: LoginService) { }

  login(){
    console.log(this.user);
  }

  authenticated() {
    console.log(this.loginService.authenticated());
  }

}
