import { Component } from '@angular/core';
import { ViewsService } from '../../../services/views.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.scss'
})
export class HeaderUserComponent {



  constructor(public viewService: ViewsService) { }


}
