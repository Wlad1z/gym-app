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
    error:boolean = false;
    errorMessage: string  ='';

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

    onError(){
        this.error = true;
        setTimeout(() => {
            this.error = false;
        }, 3000);
    }
  
    onSubmit(event: Event){
        this.errorMessage = ' '
        if(this.formLogin.valid){
            // @ts-ignore
            this.authService.login(this.formLogin.value, this.url).subscribe(response =>{
                console.log(response)
                console.log(this.authService.isAuthSession);
                this.router.navigate(['']);
            }, error =>{
                if(error.status == 401){
                    this.onError()
                    this.errorMessage = 'Неправильный логин или пароль'
                }
            })
            
        } else {
            this.onError();
            this.errorMessage = 'Введите логин и пароль'
        }
    }
}
