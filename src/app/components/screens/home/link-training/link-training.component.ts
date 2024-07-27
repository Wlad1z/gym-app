import { Component, Input } from '@angular/core';
import { ITrainig } from 'src/app/services/trainings/training.interface';

@Component({
  selector: 'app-link-training',
  templateUrl: './link-training.component.html',
  styleUrls: ['./link-training.component.css']
})
export class LinkTrainingComponent {
  @Input() item!:ITrainig

  flag: boolean = false;

  changeTraining(flag: boolean){
    this.flag = !flag
  }

}
