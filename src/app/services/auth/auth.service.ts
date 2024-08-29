import { HttpClient, HttpHeaders } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { tap } from 'rxjs'
import { userID } from './auth.user.id.interface'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  	providedIn: 'root'
})
export class AuthService {
	API_URL = 'http://192.168.1.43:8000/api/v1/auth'

	userID: number | null = null

	cokieService = inject(CookieService)

	http: HttpClient = inject(HttpClient)

	get isAuthSession() {
		if (!this.userID) {
			this.userID = Number(this.cokieService.get('user_id'))
		}
		return this.userID
	}

	login(payload: { username: string; password: string }) {
		const headers: HttpHeaders = new HttpHeaders({
		Authorization: 'Basic ' + btoa(`${payload.username}:${payload.password}`),
			'Content-Type': 'application/json',
			'Referrer-Policy': 'no-refer'
		})

		return this.http
		.post<userID>(this.API_URL, payload, { headers: headers })
		.pipe(
			tap(val => {
			this.userID = val.id

			this.cokieService.set('user_id', this.userID?.toString() || '')
			})
		)
	}
}
