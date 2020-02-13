import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FlightsStoreState } from '../flights-store/flights-store.state';
import {
  selectError,
  selectFlightExtraInfo,
  selectFlights,
  selectIsLoading
} from '../flights-store/flights-store.selectors';
import { FlightExtraInformation } from '../models/flightExtraInformation';
import { Flight } from '../models/flight';
import { GetFlightsAction,
         UpdateFlightExtraInfoAction
} from '../flights-store/flights-store.actions';

@Injectable({
  providedIn: 'root'
})

export class WorkersService {

  workers: any[] = [];
  interval: any;

  constructor(private httpClient: HttpClient, private store: Store<FlightsStoreState>) {
  }

  getURL(): string {
    return 'https://interview-mock.herokuapp.com/api/workers/';
  }

  getWorkers() {
    this.httpClient.get(this.getURL())
      .subscribe(
        (data: any) => {
          console.log(JSON.stringify(data));
          data.map(object => this.workers.push(object));
        },
        error => {
          let errorMessage: string;
          if (error.status === 404) {
            errorMessage = 'There is no workers information available !';
          } else if (error.status > 500) {
            errorMessage = 'There is no response from server, please, try later !';
          }
          console.log(errorMessage);
        });
  }

  getWorkersMock() {
    return [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
  }

  isLoading$(): Observable<boolean> {
    return this.store.select(selectIsLoading);
  }

  error$(): Observable<string> {
    return this.store.select(selectError);
  }

  flightExtraInfo$(): Observable<FlightExtraInformation> {
    return this.store.select(selectFlightExtraInfo);
  }

  flights$(): Observable<Flight[]> {
    return this.store.select(selectFlights);
  }

  getFlights(workerId: number) {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.store.dispatch(new GetFlightsAction(workerId));
    this.interval =  setInterval(() => this.store.dispatch(new GetFlightsAction(workerId)), 60000);
  }

  updateFlightExtraInfo(info: FlightExtraInformation) {
    this.store.dispatch(new UpdateFlightExtraInfoAction(info));
  }

}
