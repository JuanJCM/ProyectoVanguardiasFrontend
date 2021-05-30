import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoiceassitanceService {
  baseUrl: string = "";
  constructor(private httpClient: httpClient) { }

  sendCommand(): Observable<>{
    return;
  }
}
