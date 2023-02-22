import { Component } from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    });

  }
}
