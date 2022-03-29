import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  loading = false;
  users: Array<User | undefined> = [];

  constructor(private usersService: UsersService, private router: Router) {
    console.log('hello from user-list');
  }

  async loadUsers() {
    this.loading = true;
    this.users = await this.usersService.getUsers();
    this.loading = false;
    console.log(this.users);
  }
  goToDetails({ id }: User) {
    this.router.navigate(['user-details', id]);
  }

  ngOnInit(): void {}
}
