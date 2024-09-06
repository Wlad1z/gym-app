import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userID } from '../auth/auth.user.id.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }

    updateTraining(payload: { userId: number; id: number, title: any }) {
        const API_URL = 'http://192.168.1.43:8000/api/v1/training/update'

        return this.http.put<userID>(API_URL, payload).pipe(
            tap(val => {
                console.log(val);
            })
        )
    }

    updateExercise(payload: { id: number; trainingId:number; title:string; weight: string; repetition: number; iteration: number; userId: number;}) {
        const API_URL = 'http://192.168.1.43:8000/api/v1/exercise/update';

        return this.http.put<userID>(API_URL, payload).pipe(
            tap(val => {
                console.log(val);
            })
        )
    }
}