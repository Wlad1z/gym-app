import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  authService = inject(AuthService)

  formLogin: FormGroup<{email:any, password:any}> = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  onSubmit(event: Event){
    if(this.formLogin.valid){
      // @ts-ignore
      this.authService.login({
        "password": "Df123456",
        "email": "wlados2000@mail.ru"
      })
    }
  }
}
