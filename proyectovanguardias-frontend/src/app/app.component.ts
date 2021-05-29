import { Component } from '@angular/core';

declare const annyang: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectovanguardias-frontend';
  voiceActiveSectionDisabled: boolean = true;
  voiceActiveSectionError: boolean = false;
  voiceActiveSectionSuccess: boolean = false;
  voiceActiveSectionListening: boolean = true;
  
  voiceText: any;
      
  constructor(){}
  OnClickVoice(){

  }
  OnClickList(){

  }
  OnClickReceta(){

  }
  OnClickReminder(){

  }
}
