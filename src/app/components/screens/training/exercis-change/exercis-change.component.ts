import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExercis } from 'src/app/services/exercises/exercis.interface';

@Component({
  selector: 'app-exercis-change',
  templateUrl: './exercis-change.component.html',
  styleUrls: ['./exercis-change.component.css']
})
export class ExercisChangeComponent {
  @Input() item!: IExercis;
  @Input() id!: number;
  @Input() flag!: boolean;
  @Output() changeFlag = new EventEmitter<boolean>();

  change(arg: boolean) {
    this.flag = !arg;
    this.changeFlag.emit(this.flag);
  }
}
