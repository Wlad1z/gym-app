import { Component } from '@angular/core';
import { ITrainig } from 'src/app/services/trainings/training.interface';
import { TrainingService } from 'src/app/services/trainings/training.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trainings:ITrainig[] = [];
  
  constructor(private TrainingService: TrainingService) { }

  ngOnInit(): void {
    this.TrainingService.getAll().subscribe(data => {
      this.trainings = data;
    })
  }
}
