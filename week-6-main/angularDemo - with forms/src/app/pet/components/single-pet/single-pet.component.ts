import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pet} from "../../models/pet";

@Component({
  selector: 'app-single-pet',
  standalone: true,
  imports: [],
  templateUrl: './single-pet.component.html',
  styleUrl: './single-pet.component.css'
})
export class SinglePetComponent {

  @Input() petToDisplay: Pet | undefined;
  @Output() increaseStatus = new EventEmitter<number>();

  onButtonClicked() {
    this.increaseStatus.emit(this.petToDisplay?.id);
  }
}
