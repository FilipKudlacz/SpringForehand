import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/models/employee.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.employees.subscribe((data) => {
      this.employees = data;
    });
    this.database.loadEmployees();
  }

}
