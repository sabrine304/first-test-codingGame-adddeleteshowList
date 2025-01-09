import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserList();
  }
   public userList: any[] = [];

  getUserList() {
    this.userService.getUserList().subscribe((data) => {
       this.userList = data;
    })
  }
}
