import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IExercis, IExercisData } from './exercis.interface';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  cokieService = inject(CookieService)

  constructor(private http: HttpClient) { }

  getAll(trainingId: number){
    const userId = Number(this.cokieService.get('user_id'));
    const url = `${environment.apiUrl}/exercise/list?userId=${userId}&trainingId=${trainingId}`

    return this.http.get<IExercisData>(url).pipe(
      tap(val =>{
        console.log(val)
      })
    );
  }
}
