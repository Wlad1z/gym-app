export interface IExercis{
    id: number;
    trainingID: number;
    title: string;
    weight: string
    repetition: number;
    iteration: number
}

export interface IExercisData{
    exercises: IExercis[]
}