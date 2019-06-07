import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/model/user.interface';
import { UserService } from '../utils/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dataUser: User[];
  @Input() id: number;
  click = false;

  constructor(
    private userService: UserService) {
  }

  ngOnInit() {
    // get data here
    this.userService.getDataUser()
      .subscribe(users => this.dataUser = users);
  }

  onclick(event: any) {
    this.click = !this.click;
  }

}
