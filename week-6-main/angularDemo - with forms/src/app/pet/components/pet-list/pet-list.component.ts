import {Component, OnInit} from '@angular/core';
import {Pet} from "../../models/pet";
import {SinglePetComponent} from "../single-pet/single-pet.component";
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [
    SinglePetComponent
  ],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit {

    pets: Pet[] = [];

    constructor(private petService: PetService) {
    }

    ngOnInit(): void {
        this.pets = this.petService.getPets();
    }

    updateStatus(id: number) {
        this.pets.forEach(pet => {
                if (pet.id === id) {
                    pet.status ++;
                }
        });
    }
}
