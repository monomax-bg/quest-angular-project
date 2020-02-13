import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightsStoreState } from './flights-store.state';

export const flightsStoreState = createFeatureSelector<FlightsStoreState>('flights-store');

export const selectIsLoading = createSelector(flightsStoreState, (state: FlightsStoreState) => state.isLoading);
export const selectError = createSelector(flightsStoreState, (state: FlightsStoreState) => state.error);
export const selectFlightExtraInfo = createSelector(flightsStoreState, (state: FlightsStoreState) => state.selectedFlightExtraInfo);
export const selectFlights = createSelector(flightsStoreState, (state: FlightsStoreState) => state.flights);
