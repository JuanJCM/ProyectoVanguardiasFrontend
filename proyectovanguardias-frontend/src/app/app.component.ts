import { Component, NgZone, OnInit } from '@angular/core';
import { SignalRService } from '../services/service/signalr.service';
import { HttpClient } from '@angular/common/http';
import { ChatService } from 'src/services/chat.service';
import { messageDto } from 'src/models/messageDto';

declare const annyang: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 // constructor(public signalRService: SignalRService, private http: HttpClient) { }
 constructor(private chatService: ChatService){} 
 ngOnInit() {
  //  this.signalRService.startConnection();
   // this.signalRService.addTransferChartDataListener();
   // this.startHttpRequest();
   this.chatService.retrieveMappedObject().subscribe( (receivedObj: messageDto) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent
            
  }
  //private startHttpRequest = () => {
    //this.http.get('https://localhost:44370/api/chart?api-version=1.0')
     // .subscribe(res => {
       // console.log(res);
      //})
 // }
 msgDto: messageDto = new messageDto();
  msgInboxArray: messageDto[] = [];

  send(): void {
    if(this.msgDto) {
      if(this.msgDto.user.length == 0 || this.msgDto.user.length == 0){
        window.alert("Both fields are required.");
        return;
      } else {
        this.chatService.broadcastMessage(this.msgDto);                   // Send the message via a service
      }
    }
  }

  addToInbox(obj: messageDto) {
    let newObj = new messageDto();
    newObj.user = obj.user;
    newObj.msgText = obj.msgText;
    this.msgInboxArray.push(newObj);

  }
  title = 'proyectovanguardias-frontend';
  textShow = "";

  showData(newTxt: any) {
    this.textShow = newTxt
  }
  
  OnClickVoice(){

  }
  OnClickList(){

  }
  OnClickReceta(){

  }
  OnClickReminder(){

  }
 
}
