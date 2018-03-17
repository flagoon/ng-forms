import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {

  constructor(private employees: EmployeesService) { }

  employList = this.employees.getEmployees();

  ngOnInit() {
    console.log(this.employList);
  }

}
