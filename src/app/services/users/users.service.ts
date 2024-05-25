import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userURL = 'http://localhost:3000/users';
  constructor() { }
  // Get all users read
  async getAllUsers() {
    const data = await fetch(this.userURL);
    return (await data.json()) ?? []; // Return array if null data
  }
  async getUserById(Id: number) {
    const data = await fetch(`${this.userURL}/${Id}`);
    return (await data.json()) ?? []; // Return array if null data
  }
}
