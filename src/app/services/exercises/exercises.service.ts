import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IExercis, IExercisData } from './exercis.interface';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  cokieService = inject(CookieService)
  
  constructor(private http: HttpClient) { }

  getAll(trainingId: number){
    const userId = 16
    let API_URL = `http://192.168.1.43:8000/api/v1/exercise/list?userId=${userId}&trainingId=${trainingId}`
    return this.http.get<IExercisData >(API_URL).pipe(
      tap(val =>{
        console.log(val)
      })
    );
  }
}
