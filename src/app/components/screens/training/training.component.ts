import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExercis} from 'src/app/services/exercises/exercis.interface';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  name!: string;
  id!: number;
  flagPopUp:boolean =false;
  trainingFlag: boolean = false;

  addTraining(flag: boolean){
    this.flagPopUp = !flag
  }

  updateFlagPopUp(newFlag: boolean) {
    this.flagPopUp = newFlag;
  }

  exercises:IExercis[] = [];
  
  constructor(
    private exercisesService: ExercisesService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name') || '';
      this.id = Number(params.get('id'));
    });

    this.exercisesService.getAll(this.id).subscribe(data => {
      this.exercises = data.exercises;
      console.log(this.exercises)
    });
  }

  
}
