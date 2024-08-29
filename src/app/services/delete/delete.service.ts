import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { userID } from '../auth/auth.user.id.interface';

@Injectable({
  providedIn: 'root'
})
export class DeleteTrainingService {
    

    constructor(private http: HttpClient) { }

    deleteTraining(payload: { userId: number; id: number }) {
        const API_URL = 'http://192.168.1.43:8000/api/v1/training/delete';

        return this.http.post<userID>(API_URL, payload).pipe(
        tap(val => {
            console.log(val);
        })
        )
    }

    deleteExercise(payload: { userId: number; id: number }) {
        const API_URL = 'http://192.168.1.43:8000/api/v1/exercise/delete';

        return this.http.post<userID>(API_URL, payload).pipe(
        tap(val => {
            console.log(val);
        })
        )
    }
}
