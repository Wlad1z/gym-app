import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { dataType} from './training.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }

  authService = inject(AuthService)

  getAll(){
    
    let userID: number | null = this.authService.isAuthSession

    let API_URL = `http://192.168.1.43:8000/api/v1/training/list?userId=${userID}`

    return this.http.get<dataType>(API_URL).pipe(
      tap(val =>{
        console.log(val)
      })
    );
  }
}
