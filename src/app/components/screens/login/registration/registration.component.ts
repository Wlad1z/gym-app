import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegService } from 'src/app/services/reg/reg.service';
import { Router } from '@angular/router'; 

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
  
  regService = inject(RegService)
  router = inject(Router)

  formRegistration: FormGroup<{username:any, password:any}> = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  onSubmit(event: Event){
    if(this.formRegistration.valid){
      // @ts-ignore
      this.regService.registration(this.formRegistration.value).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['']);
        }
      );
    } else {
      alert('Пожалуйста, заполните все поля формы.');
    }
  }

 
}
