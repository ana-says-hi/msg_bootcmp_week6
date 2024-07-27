import {Injectable} from '@angular/core';
import {Pet} from "../models/pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private pets: Pet[] = [
    new Pet(1, 'caine', 'Patrocle', 1),
    new Pet(2, 'pisica', 'Luna', 0),
    new Pet(3, 'peste', 'Nemo', 1)
  ];

  constructor() { }

  getPets(): Pet[] {
    return this.pets;
  }
}
