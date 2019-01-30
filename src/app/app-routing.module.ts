import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CountriesComponent } from './countries/countries.component';
import { JobsComponent } from './jobs/jobs.component';
import { LocationsComponent } from './locations/locations.component';
import { PassportsComponent } from './passports/passports.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'passports', component: PassportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
