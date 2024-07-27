import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UserListComponent} from "./user/components/user-list/user-list.component";
import {PetListComponent} from "./pet/components/pet-list/pet-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, PetListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This is a title!';
}
