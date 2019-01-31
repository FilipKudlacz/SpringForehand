import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/models/location.model';
import { DatabaseService } from '../database.service';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  countries: Country[];
  
  constructor(private database: DatabaseService) { }
  selectedCountry: Country;
  newCityName: string;
  newStreet: string;
  newPostalCode: string;

  ngOnInit() {
    this.database.locations.subscribe((data) => {
      this.locations = data;
    });
    this.database.countries.subscribe((data) => {
      this.countries = data;
    });
    this.database.loadCountries();
    this.database.loadLocations();
  }

  onSubmit() {
    let newLocation = new Location(this.selectedCountry, this.newCityName, this.newStreet, this.newPostalCode);
    this.database.createLocation(newLocation);
    console.log(newLocation);
    this.newCityName = null;
    this.newPostalCode = null;
    this.newStreet = null;
    this.selectedCountry = null;
    this.database.loadLocations();
  }

  removeLocation(location: Location) {
    this.database.removeLocation(location);
  }
}
