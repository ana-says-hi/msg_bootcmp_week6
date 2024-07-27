import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {

  @Input() userId: string = '';

  userToEdit: User | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    if (this.userId) {
      this.userService.getUserById(+this.userId).subscribe(user => this.userToEdit = user);
    }
  }
}
