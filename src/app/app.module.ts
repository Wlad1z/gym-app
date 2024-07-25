import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/screens/home/home.module';
import { HeaderModule } from './components/ui/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { TrainingComponent } from './components/screens/training/training.component';
import { CheckboxComponent } from './components/ui/checkbox/checkbox.component';
import { LoginModule } from './components/screens/login/login.module';
import { ExercisComponent } from './components/screens/training/exercis/exercis.component';
import { ExercisElementComponent } from './components/screens/training/exercis-element/exercis-element.component';
import { ExercisChangeComponent } from './components/screens/training/exercis-change/exercis-change.component';






@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    CheckboxComponent,
    ExercisComponent,
    ExercisElementComponent,
    ExercisChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
