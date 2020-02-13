import { Component, OnInit } from '@angular/core';
import { Worker } from '../models/worker';
import {WorkersService} from "../services/workers.service";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  workers: Worker[];
  selectedWorker: Worker;

  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.workers = this.workersService.workers;
  }

  onSelect(worker: Worker): void {
    if (!this.selectedWorker || worker.id !== this.selectedWorker.id) {
      this.selectedWorker = worker;
      this.workersService.getFlights(worker.id);
      this.workersService.updateFlightExtraInfo(null);
    }
  }


}
