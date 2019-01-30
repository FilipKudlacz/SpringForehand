import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/models/location.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.locations.subscribe((data) => {
      this.locations = data;
    });
    this.database.loadLocations();
  }

}
