import { HttpClient, HttpHeaders } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { tap } from 'rxjs'
import { userID } from './auth.user.id.interface'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  	providedIn: 'root'
})
export class AuthService {
	API_URL = 'http://192.168.1.43:8000/api/v1/'

	userID: number | null = null

	cokieService = inject(CookieService)

	http: HttpClient = inject(HttpClient)

	get isAuthSession() {
		if (!this.userID) {
			this.userID = Number(this.cokieService.get('user_id'))
		}
		return this.userID
	}

	login(payload: { username: string; password: string }, url: string){
		let headers: HttpHeaders = new HttpHeaders({
			'Content-Type': 'application/json',
			'Referrer-Policy': 'no-refer'
		})
		
		if(url == "auth"){
			headers = new HttpHeaders({
				Authorization: 'Basic ' + btoa(`${payload.username}:${payload.password}`),
					'Content-Type': 'application/json',
					'Referrer-Policy': 'no-refer'
				}
			)
		} 
		
		return this.http
		.post<userID>(this.API_URL+url, payload, { headers: headers })
		.pipe(
			tap(val => {
				if(val.id){
					this.userID = val.id
				} else {
					this.userID = val.userId
				}
				console.log(val)
				this.cokieService.set('user_id', this.userID?.toString() || '')
			})
		)
	}
}
