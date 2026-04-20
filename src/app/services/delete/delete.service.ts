import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { userID } from '../auth/auth.user.id.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteTrainingService {

    constructor(private http: HttpClient) { }

    delete(payload: { userId: number; id: number }, url: string) {
        const API_URL = `${environment.apiUrl}/${url}/delete`;

        return this.http.delete<userID>(API_URL, {body: payload}).pipe(
            tap(val => {
                console.log(val);
            })
        )
    }
}
