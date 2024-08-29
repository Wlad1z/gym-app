import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  ITrainig} from '../trainings/training.interface';
import { tap } from 'rxjs';
import { IExercis } from '../exercises/exercis.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
    

    constructor(private http: HttpClient) { }

    createTraining(payload: { userId: number; title: string }) {
        const API_URL = 'http://192.168.1.43:8000/api/v1/training/create';

        return this.http.post<ITrainig>(API_URL, payload).pipe(
        tap(val => {
            console.log(val);
        })
        )
    }

    createExercise(payload: { userId: number; title: string }) {
        const API_URL = 'http://192.168.1.43:8000/api/v1/exercise/create';

        return this.http.post<IExercis>(API_URL, payload).pipe(
        tap(val => {
            console.log(val);
        })
        )
    }
}
