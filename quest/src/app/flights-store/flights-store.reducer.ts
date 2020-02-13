import { flightsStoreState, FlightsStoreState } from './flights-store.state';
import {FlightsStoreActions, FlightsStoreActionTypes} from './flights-store.actions';

export function flightsStoreReducer(state: FlightsStoreState = flightsStoreState, action: FlightsStoreActions): FlightsStoreState {
  switch (action.type) {

    case FlightsStoreActionTypes.GetFlights:
      return {
        ...state, isLoading: true
      };

    case FlightsStoreActionTypes.GetFlightsSuccess:
      return {
        ...state, isLoading: false, flights: action.payload
      };

    case FlightsStoreActionTypes.GetFlightsFail:
      return {
        ...state, isLoading: false, error: action.payload
      };

    case FlightsStoreActionTypes.UpdateFlightExtraInfo:
      return {
        ...state, selectedFlightExtraInfo: action.payload
      };

    default:
      return state;
  }
}
