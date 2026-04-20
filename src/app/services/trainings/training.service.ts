import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { dataType} from './training.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }

  authService = inject(AuthService)

  getAll(){
    const userID = this.authService.isAuthSession
    const url = `${environment.apiUrl}/training/list?userId=${userID}`

    return this.http.get<dataType>(url).pipe(
      tap(val =>{
        console.log(val)
      })
    );
  }
}
