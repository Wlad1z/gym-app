import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITrainig } from './training.interface';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/trainings'

  getAll(){
    return this.http.get<ITrainig[]>(this.API_URL);
  }
}
