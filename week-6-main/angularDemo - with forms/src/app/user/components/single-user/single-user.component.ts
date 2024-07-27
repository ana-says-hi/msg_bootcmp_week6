import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.css'
})
export class SingleUserComponent implements OnInit {

  @Input() superman: User | undefined;
  @Output() updateSuperman = new EventEmitter<User>();

  userProfileForm: FormGroup = this.formBuilder.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    username: [''],
    password: [''],
    age: [''],
    avatar: ['']
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userProfileForm = this.formBuilder.group({
      firstname: [this.superman?.firstname ?? '', Validators.required],
      lastname: [this.superman?.lastname ?? '', [Validators.required, Validators.maxLength(6)]],
      email: [this.superman?.email ?? '', [Validators.required, Validators.email]],
      username: [this.superman?.username ?? ''],
      password: [this.superman?.password ?? ''],
      age: [this.superman?.age ?? ''],
      avatar: [this.superman?.avatar ?? ''],
    });
  }

  onSave(): void {
    // {... object} is used to add extra attributes to an objects. In this case, we can use this format, to add the id attribute to the user
    const userToUpdate: User = {...this.userProfileForm.value, id: this.superman?.id};
    this.updateSuperman.emit(userToUpdate);
  }
}
