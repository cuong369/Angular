import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/utils/user.service';
import { User } from '../model/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  clicked = true;
  dataUserService: User[];
  id: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getDataFromUserService();
  }

  onClick() {
    this.clicked = !this.clicked;
  }

  getDataFromUserService(): void {
    this.userService.getDataUser().subscribe(dataUserService => this.dataUserService = dataUserService);
    this.userService.getId().subscribe(id => this.id = id);
  }

}
