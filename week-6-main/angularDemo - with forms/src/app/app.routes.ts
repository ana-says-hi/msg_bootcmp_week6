import {Routes} from '@angular/router';
import {UserListComponent} from "./user/components/user-list/user-list.component";
import {PetListComponent} from "./pet/components/pet-list/pet-list.component";
import {UserEditComponent} from "./user/components/user-edit/user-edit.component";

export const routes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'users/:userId', component: UserEditComponent },
    { path: 'pets', component: PetListComponent }
];
