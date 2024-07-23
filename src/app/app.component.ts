import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { ViewsService } from './services/views.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'chatbot';

  constructor(private authService: LoginService, private router
    : Router, public viewsService: ViewsService
  ) { }

  authenticated(): boolean {
    let bolean: boolean = this.authService.authenticated();
    return bolean;
  }

  authenticatedUser: boolean = false; // Cambia esto según el estado de autenticación


}
