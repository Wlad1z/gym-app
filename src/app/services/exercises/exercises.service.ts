import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExercis } from './exercis.interface';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/exercises'

  getAll(){
    return this.http.get<IExercis[]>(this.API_URL);
  }
}
