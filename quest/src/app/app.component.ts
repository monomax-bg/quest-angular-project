import { Component, OnInit } from '@angular/core';
import { WorkersService } from './services/workers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Web Developer Home Assignment';

  constructor(private workersService: WorkersService) {}

  ngOnInit(): void {
    this.workersService.getWorkers();
  }
}
