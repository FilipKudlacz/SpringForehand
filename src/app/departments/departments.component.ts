import { Component, OnInit } from '@angular/core';
import { Department } from '../shared/models/department.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[];
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.departments.subscribe((data) => {
      this.departments = data;
    });
    this.database.loadDepartments();
  }

}
