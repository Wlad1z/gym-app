import { EventEmitter, Injectable, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {
  constructor(){

  }
  
  changeTraining(changeTrainingFlag: boolean){
    return !changeTrainingFlag
  }

}
