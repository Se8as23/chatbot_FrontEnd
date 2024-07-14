import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {

  title = 'chatbot';

  constructor(private authService: LoginService) {}

  authenticated(): boolean {
    console.log(this.authService.authenticated());
    return this.authService.authenticated();
  }
}
