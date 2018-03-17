import { Injectable } from '@angular/core';
import { employeesList } from './employees'
import { IEmployees } from './iemployees';

@Injectable()
export class EmployeesService {

  constructor() { }
  private list: IEmployees[] = employeesList;

  public getEmployees():IEmployees[] {
    return this.list;
  }

  public addEmployee(employee: IEmployees) {
    this.list.push(employee);
  }
}
