import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {FormsModule} from '@angular/forms';
import {SingleUserComponent} from "../single-user/single-user.component";
import {UserService} from "../../service/user.service";
import {catchError, EMPTY} from "rxjs";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    FormsModule,
    SingleUserComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
   this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  updateUser(user: User) {
    this.userService.updateUser(user).pipe(
        catchError(() => {
          window.alert('Error occurred while loading users!');
          return EMPTY;
        })
    ).subscribe();
  }
}
