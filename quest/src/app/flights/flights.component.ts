import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';
import { WorkersService } from '../services/workers.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  flights$: Observable<Flight[]>;
  error$: Observable<string>;
  selectedFlight: Flight;

  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.error$ = this.workersService.error$();
    this.flights$ = this.workersService.flights$();
    this.flights$.subscribe( flights$ => {
        this.updateFirstRow(flights$[0]);
     });
  }

  updateFirstRow(firstFlight: any) {
    if (firstFlight) {
      this.onSelect(firstFlight);
    }
  }

  onSelect(flight: Flight): void {
    this.selectedFlight = flight;
    this.workersService.updateFlightExtraInfo(flight.flightExtra);
  }

 }
