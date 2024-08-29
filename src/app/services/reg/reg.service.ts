import { HttpClient, HttpHeaders } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { tap } from 'rxjs'
import { userID } from '../auth/auth.user.id.interface'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class RegService {
    API_URL = 'http://192.168.1.43:8000/api/v1/registation'

    userID: number | null = null

    cokieService = inject(CookieService)

    http: HttpClient = inject(HttpClient)

    registration(payload: { username: string; password: string }) {
        const headers: HttpHeaders = new HttpHeaders({
                'Content-Type': 'application/json',
                'Referrer-Policy': 'no-refer'
            })

        return this.http.post<userID>(this.API_URL, payload,  { headers: headers }).pipe(
        tap(val => {
            this.userID = val.id
            console.log(val)
            this.cokieService.set('user_id', this.userID?.toString() || '')
        })
        )
    }
}
