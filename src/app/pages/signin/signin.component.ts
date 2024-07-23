import { Component } from '@angular/core';
import { Register } from '../../model/Register.';
import { ViewsService } from '../../services/views.service';
import { LoginService } from '../../services/login.service';
import { error } from 'jquery';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  registerUser: Register = new Register();

  constructor(private viewService: ViewsService, private loginService: LoginService
  ) { }

  showLogin() {
    this.viewService.toggleForm(false);
  }

  register() {
    this.loginService.register(this.registerUser).subscribe(
      (data: any) => {
        console.log(data);
        this.viewService.toggleForm(false);
      },
      (error: any) => {
        console.log(error);
        window.alert('Ocurrió un error al registrarse. Por favor, inténtelo de nuevo.');
      }
    );
  }
  

}
