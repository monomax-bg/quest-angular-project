import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkersService } from '../services/workers.service';
import { FlightExtraInformation } from '../models/flightExtraInformation';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent implements OnInit {

  flightExtraInfo$: Observable<FlightExtraInformation>;

  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.flightExtraInfo$ = this.workersService.flightExtraInfo$();
  }


}
