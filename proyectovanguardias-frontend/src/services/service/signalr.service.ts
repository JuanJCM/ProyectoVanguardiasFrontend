import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import {ChartModel} from '../../models/chartmodels.models';

@Injectable({
  providedIn: 'root'
})

export class SignalRService {
  public data!: ChartModel[];

  private hubConnection!: signalR.HubConnection

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:44370/chart?api-version=1.0')
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data) => {
      this.data = data;
      console.log(data);
    });
  }
}