import { USER } from './user.db';
import { User } from '../user/model/user.interface';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private idLogin: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  idFromLogin: Observable<number> = this.idLogin.asObservable();

  constructor() { }

  getDataUser(): Observable<User[]> {
    return of(USER);
  }

  setDataUser(newPerson: User) {
    USER.push(newPerson);
  }

  getId() {
    return this.idLogin;
  }

  setId(id: number) {
    console.log('idservice get:' + id);
    this.idLogin.next(id);
  }

  getUserLogin() {
    return USER[0];
  }
}
