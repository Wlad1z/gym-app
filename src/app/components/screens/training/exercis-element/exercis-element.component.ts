import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
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

  userId: number = inject(AuthService).isAuthSession

  change(arg: boolean) {
    this.flag = !arg;
    this.changeFlag.emit(this.flag);
  }
  
  createArray(length: number): number[] {
    return new Array(length);
  }
}
