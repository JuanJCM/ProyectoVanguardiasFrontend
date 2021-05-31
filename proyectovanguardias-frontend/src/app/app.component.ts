import { Component, NgZone, OnInit } from '@angular/core';
import { SignalRService } from '../services/service/signalr.service';
import { HttpClient } from '@angular/common/http';

declare const annyang: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public signalRService: SignalRService, private http: HttpClient) { }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.get('https://localhost:44370/api/chart?api-version=1.0')
      .subscribe(res => {
        console.log(res);
      })
  }
  title = 'proyectovanguardias-frontend';

  
  OnClickVoice(){

  }
  OnClickList(){

  }
  OnClickReceta(){

  }
  OnClickReminder(){

  }
 
}
