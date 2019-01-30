import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/models/job.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[];
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.jobs.subscribe((data) => {
      this.jobs = data;
    });
    this.database.loadJobs();
  }

}
