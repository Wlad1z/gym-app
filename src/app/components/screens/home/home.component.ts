import { Component } from '@angular/core';
import { ITrainig } from 'src/app/services/trainings/training.interface';
import { TrainingService } from 'src/app/services/trainings/training.service';
import { dataType } from './data_type.interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trainings:ITrainig[] = [];
  flagPopUp:boolean =false;
  trainingFlag: boolean = true;

  addTraining(arg: boolean) {
    this.flagPopUp = !arg;
  }

  updateFlagPopUp(newFlag: boolean) {
    this.flagPopUp = newFlag;
  }

  

  constructor(private TrainingService: TrainingService) { }

  ngOnInit(): void {
    this.TrainingService.getAll().subscribe(data => {
      this.trainings = data.trainings;
    })
  }
}
