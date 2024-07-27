import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})
export class AddPopUpComponent {
  @Input() flag!: boolean;
  @Input() training!: boolean;
  @Output() haveFlag = new EventEmitter<boolean>();
  @Output() trainingChange = new EventEmitter<boolean>(); 

  change(arg: boolean) {
    this.flag = !arg;
    this.haveFlag.emit(this.flag);
  }

  toggleTraining() {
    this.training = !this.training;
    this.trainingChange.emit(this.training);
  }
}