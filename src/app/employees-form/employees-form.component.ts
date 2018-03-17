import { Component, OnInit } from '@angular/core';
import { IEmployees } from '../iemployees';
import { EmployeesService } from '../employees.service'

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit {

  constructor(private service: EmployeesService) { }

  ngOnInit() {
  }

  validated = {
    "name": true,
    "lastName": true,
    "age": true,
    "winner": true,
    "salary": true
  }

  private employee: IEmployees = {
    "name": "",
    "lastName": "",
    "age": 0,
    "winner": false,
    "salary": 0
  };

  public onSubmit(form) {
    this.employee = form.form.value;
    if(!this.validate(this.employee)){
      return;
    };
    this.service.addEmployee(this.employee);
    form.reset();
  }

  private resetValidate() {
    this.validated = {
      "name": true,
      "lastName": true,
      "age": true,
      "winner": true,
      "salary": true
    }
  }

  private validate(data: IEmployees) {
    let result = true;
    this.resetValidate()
    if(data.winner === null) {
      data.winner = true;
    }
    if(!data.name) {
      this.validated.name = false;
      result = false;
    }
    if(!data.lastName) {
      this.validated.lastName = false;
      result = false;
    }
    if(!data.age || isNaN(Number(data.age)) || Number(data.age > 140)) {
      this.validated.age = false;
      result = false;
    }
    if(!data.salary || isNaN(Number(data.salary))) {
      this.validated.salary = false;
      result = false;
    }
    return result;
  }
}
