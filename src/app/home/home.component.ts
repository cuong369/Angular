import { Component, OnInit } from '@angular/core';
import { UserService } from '../utils/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: number;
  clicked = true;

  constructor(private userService: UserService, private routes: Router) { }

  ngOnInit() {
    if (!this.id) {
      this.userService.getId().subscribe(id => this.id = id);
      console.log(this.id);
    } else {
      this.routes.navigateByUrl('/login');
    }
  }

  onClick() {
    this.clicked = !this.clicked;
  }

}
