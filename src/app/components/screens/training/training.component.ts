import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExercis } from 'src/app/services/exercises/exercis.interface';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  name!: string;
  id!: number;

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

    this.exercisesService.getAll().subscribe(data => {
      this.exercises = data;
    });
  }

  
}
