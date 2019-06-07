import { UserService } from './../utils/user.service';
import { USER } from './../utils/user.db';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/model/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User[];

  constructor(
    private routes: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  // authentication(name: string, pass: string) {
  //   let i: number;
  //   for (i = 0; i < USER.length; i++) {
  //     if (USER[i].name === name && USER[i].password === pass) {
  //       this.userService.setId(i);
  //       this.routes.navigateByUrl('/home');
  //       break;
  //     } else {
  //       alert('Login Again!!!');
  //       break;
  //     }
  //   }
  // }

  authentication(name: string, pass: string) {

    let i: number;

    for (i = 0; i < USER.length; i++) {
      this.userService.getDataUser()
        .subscribe(user => this.user = user);
      if (this.user[i].name === name && this.user[i].password === pass) {
        this.userService.setId(i);
        this.routes.navigate(['/home']);
        break;
      } else {
        alert('Login Again!!!');
        break;
      }
    }

  }

}
