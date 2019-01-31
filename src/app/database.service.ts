import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './shared/models/employee.model';
import { Department } from './shared/models/department.model';
import { Country } from './shared/models/country.model';
import { Location } from './shared/models/location.model';
import { Job } from './shared/models/job.model';
import { Passport } from './shared/models/passport.model';
import { HttpClient } from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private serverAddress;
  private _employees: BehaviorSubject<Employee[]>;
  private _departments: BehaviorSubject<Department[]>;
  private _countries: BehaviorSubject<Country[]>;
  private _locations: BehaviorSubject<Location[]>;
  private _jobs: BehaviorSubject<Job[]>;
  private _passports: BehaviorSubject<Passport[]>;
  private dataStore: {
    employees: Employee[],
    departments: Department[],
    countries: Country[],
    locations: Location[],
    jobs: Job[],
    passports: Passport[]
  }
  constructor(private http: HttpClient) { 
    this.serverAddress = 'http://localhost:8080';
    this._countries = <BehaviorSubject<Country[]>> new BehaviorSubject([]);
    this._departments = <BehaviorSubject<Department[]>> new BehaviorSubject([]);
    this._employees = <BehaviorSubject<Employee[]>> new BehaviorSubject([]);
    this._jobs = <BehaviorSubject<Job[]>> new BehaviorSubject([]);
    this._passports = <BehaviorSubject<Passport[]>> new BehaviorSubject([]);
    this._locations = <BehaviorSubject<Location[]>> new BehaviorSubject([]);
    this.dataStore = {
      employees: [],
      departments: [],
      countries: [],
      locations: [],
      jobs: [],
      passports: []
    }
  }

  get employees() {
    return this._employees.asObservable();
  }

  get departments() {
    return this._departments.asObservable();
  }

  get countries() {
    return this._countries.asObservable();
  }

  get locations() {
    return this._locations.asObservable();
  }

  get jobs() {
    return this._jobs.asObservable();
  }

  get passports() {
    return this._passports.asObservable();
  }

  loadEmployees() {
    this.http.get<Employee[]>(this.serverAddress + '/employees').subscribe((data) => {
      this.dataStore.employees = data;
      this._employees.next(Object.assign({}, this.dataStore).employees);
    })
  }

  loadCountries() {
    this.http.get<Country[]>(this.serverAddress + '/countries').subscribe((data) => {
      this.dataStore.countries = data;
      this._countries.next(Object.assign({}, this.dataStore).countries);
    })
  }

  createCountry(country: Country) {
    this.http.post(this.serverAddress + '/country', country).subscribe();
    this.dataStore.countries.push(country);
    this._countries.next(Object.assign({}, this.dataStore).countries);
  }

  removeCountry(country: Country) {
    this.http.delete(this.serverAddress + '/country' + country.id).subscribe();
    this.dataStore.countries.forEach((currentCountry, index) => {
      if(country.id == currentCountry.id) {
        this.dataStore.countries.splice(index, 1);
      }
    });
    this._countries.next(Object.assign({}, this.dataStore).countries);
  }

  loadDepartments() {
    this.http.get<Department[]>(this.serverAddress + '/departments').subscribe((data) => {
      this.dataStore.departments = data;
      this._departments.next(Object.assign({}, this.dataStore).departments);
    })
  }

  loadJobs() {
    this.http.get<Job[]>(this.serverAddress + '/jobs').subscribe((data) => {
      this.dataStore.jobs = data;
      this._jobs.next(Object.assign({}, this.dataStore).jobs);
    });
  }

  loadLocations() {
    this.http.get<Location[]>(this.serverAddress + '/locations').subscribe((data) => {
      this.dataStore.locations = data;
      this._locations.next(Object.assign({}, this.dataStore).locations);
    });
  }

  createLocation(location: Location) {
    this.http.post(this.serverAddress + '/location', location).subscribe();
    this.dataStore.locations.push(location);
    this._locations.next(Object.assign({}, this.dataStore).locations);
  }

  removeLocation(location: Location) {
    this.http.delete(this.serverAddress + '/location' + location.id).subscribe();
    this.dataStore.locations.forEach((currentLocation, index) => {
      if(location.id == currentLocation.id) {
        this.dataStore.locations.splice(index, 1);
      }
    });
    this._locations.next(Object.assign({}, this.dataStore).locations);
  }

  loadPassports() {
    this.http.get<Passport[]>(this.serverAddress + '/passports').subscribe((data) => {
      this.dataStore.passports = data;
      this._passports.next(Object.assign({}, this.dataStore).passports);
    })
  }
}
