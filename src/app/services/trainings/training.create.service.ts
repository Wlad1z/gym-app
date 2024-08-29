import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  ITrainig} from './training.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTrainingService {
    API_URL = 'http://192.168.1.43:8000/api/v1/training/create'

    constructor(private http: HttpClient) { }

    createTraining(payload: { userId: number; title: string }) {
        return this.http.post<ITrainig>(this.API_URL, payload).pipe(
        tap(val => {
            console.log(val);
        })
        )
    }
}
