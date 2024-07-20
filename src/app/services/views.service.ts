import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  private showRegisterFormSubject = new BehaviorSubject<boolean>(false);
  showRegisterForm$ = this.showRegisterFormSubject.asObservable();

  toggleForm(showRegister: boolean) {
    this.showRegisterFormSubject.next(showRegister);
  }

}
