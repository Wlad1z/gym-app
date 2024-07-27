import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ChangeService } from 'src/app/services/change/change.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Input() flag!:boolean;
  @Output() flagChange = new EventEmitter<boolean>();

  change(arg: boolean) {
    this.flag = !arg;
    this.flagChange.emit(this.flag);
  }
  
  authService = inject(AuthService)

  formRegistration: FormGroup<{username:any, password:any}> = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  onSubmit(event: Event){
    if(this.formRegistration.valid){
      // @ts-ignore
      this.authService.login(this.formRegistration.vlaue)
    }
  }

 
}
