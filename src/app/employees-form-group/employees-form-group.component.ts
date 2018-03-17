import { Component, OnInit } from '@angular/core';
import { IEmployees } from '../iemployees';
import { EmployeesService } from '../employees.service'

@Component({
  selector: 'app-employees-form-group',
  templateUrl: './employees-form-group.component.html',
  styleUrls: ['./employees-form-group.component.scss']
})
export class EmployeesFormGroupComponent implements OnInit {

  constructor(private service: EmployeesService) { }

  ngOnInit() {
  }

}
