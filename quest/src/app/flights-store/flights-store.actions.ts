import {Action} from '@ngrx/store';

export enum FlightsStoreActionTypes {
  GetFlights = '[Flights Store] Get Flights',
  GetFlightsSuccess = '[Flights Store] Get Flights Success',
  GetFlightsFail = '[Flights Store] Get Flights Fail',
  UpdateFlightExtraInfo = '[Flights Store] Update Flight Extra Info',
}

export class GetFlightsAction implements Action {
  readonly type = FlightsStoreActionTypes.GetFlights;
  constructor(public payload: number) {}
}

export class GetFlightsSuccessAction implements Action {
  readonly type = FlightsStoreActionTypes.GetFlightsSuccess;
  constructor(public payload: any[]) {}
}

export class GetFlightsFailAction implements Action {
  readonly type = FlightsStoreActionTypes.GetFlightsFail;
  constructor(public payload: string) {}
}

export class UpdateFlightExtraInfoAction implements Action {
  readonly type = FlightsStoreActionTypes.UpdateFlightExtraInfo;
  constructor(public payload: any) {}
}

export type FlightsStoreActions =
  GetFlightsAction |
  GetFlightsSuccessAction |
  GetFlightsFailAction |
  UpdateFlightExtraInfoAction;
