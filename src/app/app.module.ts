import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeesService } from './employees.service';


import { AppComponent } from './app.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { EmployeesFormGroupComponent } from './employees-form-group/employees-form-group.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    EmployeesFormComponent,
    EmployeesFormGroupComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
