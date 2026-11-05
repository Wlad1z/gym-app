import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IExercis } from 'src/app/services/exercises/exercis.interface';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { RefreshService } from 'src/app/services/refresh/refresh.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnDestroy {
  name!: string;
  id!: number;
  flagPopUp: boolean = false;
  trainingFlag: boolean = false;
  exercises: IExercis[] = [];
  private refreshSub!: Subscription;

  addTraining(flag: boolean) {
    this.flagPopUp = !flag;
  }

  updateFlagPopUp(newFlag: boolean) {
    this.flagPopUp = newFlag;
  }

  constructor(
    private exercisesService: ExercisesService,
    private route: ActivatedRoute,
    private refreshService: RefreshService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name') || '';
      this.id = Number(params.get('id'));
    });

    this.getExercises();
    this.refreshSub = this.refreshService.refresh$.subscribe(() => {
      this.getExercises();
    });
  }

  ngOnDestroy(): void {
    this.refreshSub?.unsubscribe();
  }

  getExercises() {
    this.exercisesService.getAll(this.id).subscribe(data => {
      this.exercises = data.exercises;
    });
  }
}
