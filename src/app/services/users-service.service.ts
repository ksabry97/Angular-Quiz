import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  constructor(private http: HttpClient) {}

  //getUsers

  getUsers(pageIndex: number = 1) {
    let url = `https://reqres.in/api/users?page=${pageIndex}`;
    return this.http.get(url);
  }

  // get USer By ID

  getUser(userID: number) {
    let url = `https://reqres.in/api/users/${userID}`;
    return this.http.get(url);
  }
}
