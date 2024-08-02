import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';
import { TrainingComponent } from './components/screens/training/training.component';
import { LoginComponent } from './components/screens/login/login.component';
import { canActivateAuth } from './auth/access.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[canActivateAuth]
  }, 
  {
    path: 'training/:name/:id',
    component: TrainingComponent,
    canActivate:[canActivateAuth]
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
