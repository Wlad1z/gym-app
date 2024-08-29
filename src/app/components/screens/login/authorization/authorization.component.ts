import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  @Input() flag!:boolean;
  @Output() flagChange = new EventEmitter<boolean>();

  change(arg: boolean) {
    this.flag = !arg;
    this.flagChange.emit(this.flag);
  }
  router = inject(Router)
  authService = inject(AuthService)

  formLogin: FormGroup<{username:any, password:any}> = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  onSubmit(event: Event){
    if(this.formLogin.valid){
      // @ts-ignore
      this.authService.login(this.formLogin.value).subscribe(response =>{
        console.log(response)
        console.log(this.authService.isAuthSession);
        this.router.navigate(['']);
      })
      
    }
  }
}
