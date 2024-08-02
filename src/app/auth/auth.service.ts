import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { sesssionRequest } from './auth.session.interface';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost/api/v2/user/session'

  sessionToken: string | null = null;

  cokieService = inject(CookieService)

  http: HttpClient = inject(HttpClient)

  get isAuthSession(){
    if(!this.sessionToken){
      this.sessionToken = this.cokieService.get('sesssion_token')
    }
    return this.sessionToken
  }

  login(payload:{ email: string, password: string}){
   
    return this.http.post<sesssionRequest>(
      this.API_URL, payload).pipe(
        tap(val =>{
          this.sessionToken = val.session_token

          this.cokieService.set('sesssion_token', this.sessionToken)
        })
      )
  }
}
