import { Injectable } from '@angular/core';
import { User, Details } from '../models/user.model';
import { default as data } from '../users-list.json';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(data);
      }, 2000);
    });
  }
}
