import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  nombre: string = '';

  constructor() { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem('token') ?? '';
  }

}
