import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.interface';
import { UserService } from 'src/app/utils/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataUserService: User[];
  id: number;
  clicked = true;

  groupRule = [
    'Administrator',
    'Editor',
    'Normal'
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getDataFromUserService();
  }

  getDataFromUserService(): void {
    this.userService.getDataUser().subscribe(dataUserService => this.dataUserService = dataUserService);
    this.userService.getId().subscribe(id => this.id = id);
  }

  onClick() {
    this.clicked = !this.clicked;
  }

}
