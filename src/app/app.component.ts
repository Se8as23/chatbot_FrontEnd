import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {

  title = 'chatbot';

  constructor(private authService: LoginService, private router
  : Router
  ) {}

  authenticated(): boolean {
    let bolean: boolean = this.authService.authenticated();
    return bolean;
  }
  
}
