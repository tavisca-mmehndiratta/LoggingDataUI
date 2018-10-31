import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { TrainingData } from './logging-table/TrainingData.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {
  datalog: TrainingData[];

  constructor(private http: HttpClient) {
  }
  
  getLogs(): Observable<any> {
    
    return this.http.get<any>('http://tripassistant-user.ap-south-1.elasticbeanstalk.com/api/TrainingData');

  }
  setlogs(res) {
    
    this.datalog = res;
    console.log(this.datalog);
  }

 
  }

