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
  
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.countries.subscribe((data) => {
      this.countries = data;
    });
    this.database.loadCountries();
    console.log(this.countries);
  }
}
