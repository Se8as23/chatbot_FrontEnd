import { Component } from '@angular/core';
import { User } from '../../model/User';
import { LoginService } from '../../services/login.service';
import { Register } from '../../model/Register.';
import { ViewsService } from '../../services/views.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../model/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user: User = new User();
  loginResponse: LoginResponse = new LoginResponse();
  showRegisterForm$ = this.viewService.showRegisterForm$;


  constructor(private loginService: LoginService, private viewService: ViewsService
    , private router: Router, public viewsService: ViewsService
  ) { }

  login() {
    this.loginService.login(this.user.username! , this.user.password!).subscribe(
      (data: LoginResponse) => {
        this.loginResponse = data;
        console.log(this.loginResponse);
        localStorage.setItem('token', this.loginResponse.nombre ?? '');
      }
    );

  
    // console.log(this.user);
    // localStorage.setItem('token', this.user.username ?? '');
    // this.router.navigate(['/home']);
  }

  authenticated() {
    console.log(this.loginService.authenticated());
  }


  showRegister() {
    this.viewService.toggleForm(true);
  }

}
