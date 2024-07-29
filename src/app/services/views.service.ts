import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  showIndex: boolean = true;
  showLogin: boolean = false;
  showHeader: boolean = true;
  showFooter: boolean = true;

  constructor() {}

  toggleToIndex() {
    this.showIndex = true;
    this.showLogin = false;
    this.showHeader = true;
    this.showFooter = true;
  }

  toggleToLogin() {
    this.showIndex = false;
    this.showHeader = false;
    this.showFooter = false;
    this.showLogin = true;
  }

  private showRegisterFormSubject = new BehaviorSubject<boolean>(false);
  showRegisterForm$ = this.showRegisterFormSubject.asObservable();

  toggleForm(showRegister: boolean) {
    this.showRegisterFormSubject.next(showRegister);
  }

}
