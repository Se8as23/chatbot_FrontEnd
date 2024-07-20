import { Component } from '@angular/core';
import { User } from '../../model/User';
import { LoginService } from '../../services/login.service';
import { Register } from '../../model/Register.';
import { ViewsService } from '../../services/views.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user: User = new User();
  showRegisterForm$ = this.viewService.showRegisterForm$;


  constructor(private loginService: LoginService, private viewService: ViewsService
    , private router: Router
  ) { }

  login() {
    console.log(this.user);
    localStorage.setItem('token', this.user.username ?? '');
    this.router.navigate(['/home']);
  }

  authenticated() {
    console.log(this.loginService.authenticated());
  }


  showRegister() {
    this.viewService.toggleForm(true);
  }

}
