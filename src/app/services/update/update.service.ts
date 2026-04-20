import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userID } from '../auth/auth.user.id.interface';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }

    updateTraining(payload: { userId: number; id: number, title: any }) {
        const url = `${environment.apiUrl}/training/update`;

        return this.http.put<userID>(url, payload).pipe(
            tap(val => {
                console.log(val);
            })
        )
    }

    updateExercise(payload: { id: number; trainingId:number; title:string; weight: string; repetition: number; iteration: number; userId: number;}) {
        const url = `${environment.apiUrl}/exercise/update`;

        return this.http.put<userID>(url, payload).pipe(
            tap(val => {
                console.log(val);
            })
        )
    }
}
