import { Component, Input } from '@angular/core';
import { IExercis } from 'src/app/services/exercises/exercis.interface';

@Component({
  selector: 'app-exercis',
  templateUrl: './exercis.component.html',
  styleUrls: ['./exercis.component.css']
})
export class ExercisComponent {
  @Input() item!: IExercis;
  @Input() id!: number;

  flag: boolean = false;

  updateFlag(newValue: boolean) {
    this.flag = newValue;
  }
}
