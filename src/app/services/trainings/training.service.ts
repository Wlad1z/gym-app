import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITrainig } from './training.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { tap } from 'rxjs';
import { dataType } from 'src/app/components/screens/home/data_type.interface';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  sessionToken: string = inject(AuthService).isAuthSession

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:80/api/v2/web-app/_func/get_trainings'

  getAll(){
    const headers = new HttpHeaders ({
      'X-DreamFactory-Session-Token': this.sessionToken,
      'X-DreamFactory-API-Key': '9cd4ed561b90baf8f58573df65ce500fd0234aea40133c9f4150ef9c17a1568f'
    })

    return this.http.get<dataType>(this.API_URL, {headers}).pipe(
      tap(val =>{
        console.log(val)
      })
    );
  }
}
