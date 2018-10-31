import { Component, OnInit } from '@angular/core';
import { LoggingServiceService } from '../logging-service.service';
import { HttpClient } from '@angular/common/http';
import { TrainingData } from './TrainingData.Model';
import { Http, Response } from "@angular/http";
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-logging-table',
  templateUrl: './logging-table.component.html',
  styleUrls: ['./logging-table.component.css']
})
export class LoggingTableComponent implements OnInit {

  errorMsg: any;
  response: any;
  logdata: TrainingData[];
  displayedColumns: string[] = ['request', 'response'];
  constructor(private svc: LoggingServiceService) {
  }
   
  ngOnInit() {
    this.getLogs();
  }

  getLogs() {
    this.svc.getLogs()
      .subscribe(data => {
        this.response = data;
        console.log(this.response);
        this.svc.setlogs(this.response);
        
      
      },

    ); 
    
    
  }
}
