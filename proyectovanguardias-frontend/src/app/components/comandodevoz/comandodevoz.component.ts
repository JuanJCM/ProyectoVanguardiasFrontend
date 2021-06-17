import { Component, NgZone, OnInit, EventEmitter, Output} from '@angular/core';

declare const annyang: any;
@Component({
  selector: 'app-comandodevoz',
  templateUrl: './comandodevoz.component.html',
  styleUrls: ['./comandodevoz.component.css']
})
export class ComandodevozComponent implements OnInit {


  ngOnInit(): void {
  }
  voiceActiveSectionDisabled: boolean = true;
  voiceActiveSectionError: boolean = false;
  voiceActiveSectionSuccess: boolean = false;
  voiceActiveSectionListening: boolean = true;
  voiceText: any;
  texto: string = "";
  @Output() showText = new EventEmitter<string>();
  constructor(private ngZone: NgZone){}

  changeValue(txt: string) { 
	this.showText.emit(txt);
}	

	initializeVoiceRecognitionCallback(): void {
		annyang.addCallback('error', (err: { error: string; }) => {
      if(err.error === 'network'){
        this.voiceText = "Internet is require";
        annyang.abort();
        this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
      } else if (this.voiceText === undefined) {
				this.ngZone.run(() => this.voiceActiveSectionError = true);
				annyang.abort();
				this.changeValue("Didn't catch that")
			}
		});

		annyang.addCallback('soundstart', () => {
      this.ngZone.run(() => this.changeValue("Listening"));
		});

		annyang.addCallback('end', () => {
      if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
				annyang.abort();
			}
			this.changeValue("")
		});

		annyang.addCallback('result', (userSaid: any[]) => {
			this.ngZone.run(() => this.voiceActiveSectionError = false);

			let queryText: any = userSaid[0];

			annyang.abort();

      this.voiceText = queryText;
	  this.changeValue(queryText)
		this.texto = queryText;
			this.ngZone.run(() => this.voiceActiveSectionListening = false);
      this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
		});
	}

	startVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = false;
		this.voiceActiveSectionError = false;
		this.voiceActiveSectionSuccess = false;
    this.voiceText = undefined;
	this.changeValue("Start talking...")

		if (annyang) {
			let commands = {
				'demo-annyang': () => { }
			};

			annyang.addCommands(commands);

      this.initializeVoiceRecognitionCallback();

			annyang.start({ autoRestart: false });
		}
	}

	closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
		this.voiceActiveSectionError = false;
		this.voiceActiveSectionSuccess = false;
		this.voiceActiveSectionListening = false;
		this.voiceText = undefined;

		if(annyang){
      annyang.abort();
    }
	}
}
