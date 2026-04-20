import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITrainig} from '../trainings/training.interface';
import { tap } from 'rxjs';
import { IExercis } from '../exercises/exercis.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CreateService {

    constructor(private http: HttpClient) { }

    createTraining(payload: { userId: number; title: string }) {
        const url = `${environment.apiUrl}/training/create`;

        return this.http.post<ITrainig>(url, payload).pipe(
            tap(val => {
                console.log(val);
            })
        )
    }

    createExercise(payload: { id: number; title:string; weight: string; repetition: number; iteration: number; userId: number;}) {
        const url = `${environment.apiUrl}/exercise/create`;

        return this.http.post<IExercis>(url, payload).pipe(
            tap(val => {
                console.log(val);
            })
        )
    }
}
