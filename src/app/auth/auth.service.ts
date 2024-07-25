import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://26.14.16.148/api/v2/user/session'

  http: HttpClient = inject(HttpClient)

  login(payload:{ email: string, password: string}){
    return this.http.post(`${this.API_URL}`, payload)
  }
}
