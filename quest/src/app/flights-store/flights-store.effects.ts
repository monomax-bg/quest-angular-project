import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  FlightsStoreActionTypes,
  GetFlightsAction,
  GetFlightsFailAction,
  GetFlightsSuccessAction
} from './flights-store.actions';
import { catchError, switchMap} from 'rxjs/operators';
import { WorkersService } from '../services/workers.service';

@Injectable()
export class FlightsStoreEffects {
  constructor(private httpClient: HttpClient, private actions$: Actions, private workersService: WorkersService) {}

  @Effect()
  getFlights$: Observable<Action> = this.actions$.pipe(
    ofType<GetFlightsAction>(FlightsStoreActionTypes.GetFlights),
    switchMap((action: GetFlightsAction ) => {
      return this.httpClient.get(this.workersService.getURL() + action.payload).pipe(
        switchMap((result: any[]) => {
          console.log(JSON.stringify(result));
          return of(new GetFlightsSuccessAction(result.map(flightObject => {
            return {
              flightInfo: {
                num: flightObject.num, from: flightObject.from, to: flightObject.to,
                from_date: flightObject.from_date, to_date: flightObject.to_date
              },
              flightExtra: {
                plane: flightObject.plane, duration: flightObject.duration,
                from_gate: flightObject.from_gate, to_gate: flightObject.to_gate
              }
            };
          })));
        } ),
        catchError( (e) => {
          return of(new GetFlightsFailAction(e));
        }));
    }));


}
