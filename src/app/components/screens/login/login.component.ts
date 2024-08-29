import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
    selector: 'app-login',
    standalone: false,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    flag:boolean = true;
    url:string = 'auth'

    change(arg: boolean) {
        this.flag = !arg;
        if(this.flag){
            this.url = 'auth'
        } else {
            this.url = 'registation'
        }
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
            this.authService.login(this.formLogin.value, this.url).subscribe(response =>{
                console.log(this.authService.isAuthSession);
                this.router.navigate(['']);
            })
            
        }
    }
}
