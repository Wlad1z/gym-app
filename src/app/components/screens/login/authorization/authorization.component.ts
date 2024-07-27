import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ChangeService } from 'src/app/services/change/change.service';

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

  authService = inject(AuthService)

  formLogin: FormGroup<{username:any, password:any}> = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  onSubmit(event: Event){
    if(this.formLogin.valid){
      // @ts-ignore
      this.authService.login(this.formLogin.vlaue)
    }
  }
}
