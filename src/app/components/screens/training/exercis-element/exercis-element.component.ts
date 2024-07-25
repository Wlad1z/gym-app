import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExercis } from 'src/app/services/exercises/exercis.interface';

@Component({
  selector: 'app-exercis-element',
  templateUrl: './exercis-element.component.html',
  styleUrls: ['./exercis-element.component.css']
})
export class ExercisElementComponent {
  @Input() item!: IExercis;
  @Input() id!: number;
  @Input() flag!: boolean;
  @Output() changeFlag = new EventEmitter<boolean>();

  change(arg: boolean) {
    this.flag = !arg;
    this.changeFlag.emit(this.flag);
  }
  
  createArray(length: number): number[] {
    return new Array(length);
  }
}
