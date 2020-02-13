export interface FlightsStoreState {
  isLoading: boolean;
  flights: any[];
  selectedFlightExtraInfo: any;
  error: string;
}

export const flightsStoreState: FlightsStoreState = {
  isLoading: false,
  flights: [],
  selectedFlightExtraInfo: null,
  error: '',
}

