import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/models/country.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country[];
  newCountryName: string;
  
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.countries.subscribe((data) => {
      this.countries = data;
    });
    this.database.loadCountries();
    console.log(this.countries);
  }

  addCountry() {
    let newCountry = new Country(this.newCountryName);
    console.log(newCountry);
    this.database.createCountry(newCountry);
  }

  removeCountry(country: Country) {
    
  }

  addCountry() {
    let newCountry = new Country(this.newCountryName);
    console.log(newCountry);
    this.database.createCountry(newCountry);
  }

  removeCountry(country: Country) {
    
  }
}
