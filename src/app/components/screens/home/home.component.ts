import { Component, inject } from '@angular/core';
import { RefreshService } from 'src/app/services/refresh/refresh.service';
import { ITrainig } from 'src/app/services/trainings/training.interface';
import { TrainingService } from 'src/app/services/trainings/training.service';




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

  
  

  constructor(
    private trainingService: TrainingService,
    private refreshService: RefreshService
  ) {}

  ngOnInit(): void {
    this.getTrainings();

    // подписываемся на обновление
    this.refreshService.refresh$.subscribe(() => {
      this.getTrainings(); // вызываем обновление
    });
  }

  getTrainings() {
    this.trainingService.getAll().subscribe(data => {
      this.trainings = data.trainings;
    });
  }

}
