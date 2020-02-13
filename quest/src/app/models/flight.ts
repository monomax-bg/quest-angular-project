import { FlightExtraInformation } from './flightExtraInformation';
import { FlightInformation } from './flightInformation';

export interface Flight {
  flightInfo: FlightInformation;
  flightExtra: FlightExtraInformation;
}
