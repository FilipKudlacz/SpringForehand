import { Component, OnInit } from '@angular/core';
import { Passport } from '../shared/models/passport.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-passports',
  templateUrl: './passports.component.html',
  styleUrls: ['./passports.component.css']
})
export class PassportsComponent implements OnInit {
  passports: Passport[];
  
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.passports.subscribe((data) => {
      this.passports = data;
    });
    this.database.loadPassports();
  }

}
