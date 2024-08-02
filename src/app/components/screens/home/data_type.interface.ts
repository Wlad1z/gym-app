import { ITrainig } from "src/app/services/trainings/training.interface"

export interface dataType {
    error_code:number
    error_text:string
    trainings: ITrainig[]
  }
  