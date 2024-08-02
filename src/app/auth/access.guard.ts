import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router"

export const  canActivateAuth = () =>{
    const sessionAuth = !!inject(AuthService).isAuthSession

    if (sessionAuth){
        return true
    }

    return inject(Router).createUrlTree(['/login'])
}