import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:8080/users/';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + id);
  }

  updateUser(userToUpdate: User): Observable<User> {
    return this.httpClient.put<User>(this.url, userToUpdate);
  }

}
