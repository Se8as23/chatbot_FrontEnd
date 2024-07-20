import { Component } from '@angular/core';
import { Register } from '../../model/Register.';
import { ViewsService } from '../../services/views.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  registerUser: Register = new Register();

  constructor(private viewService: ViewsService) {}

  showLogin() {
    this.viewService.toggleForm(false);
  }

  register(){
    
  }

}
