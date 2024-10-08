import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AddButtonComponent } from '../../ui/buttons/add-button/add-button.component';
import { DeleteButtonComponent } from '../../ui/buttons/delete-button/delete-button.component';
import { ChangeButtonComponent } from '../../ui/buttons/change-button/change-button.component';
import { LinkTrainingComponent } from './link-training/link-training.component';
import { CheckButtonComponent } from '../../ui/buttons/check-button/check-button.component';
import { CancelButtonComponent } from '../../ui/buttons/cancel-button/cancel-button.component';
import { AddPopUpComponent } from '../../ui/add-pop-up/add-pop-up.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    AddButtonComponent,
    DeleteButtonComponent,
    ChangeButtonComponent,
    LinkTrainingComponent,
    CheckButtonComponent,
    CancelButtonComponent,
    AddPopUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    AddButtonComponent,
    DeleteButtonComponent,
    ChangeButtonComponent,
    CheckButtonComponent,
    CancelButtonComponent,
    AddPopUpComponent
  ]
})
export class HomeModule { }
