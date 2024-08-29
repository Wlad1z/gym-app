export interface ITrainig{
    id: number;
    title: string;
}

export interface dataType {
    error_code:number
    error_text:string
    trainings: ITrainig[]
    userId: number
}
  