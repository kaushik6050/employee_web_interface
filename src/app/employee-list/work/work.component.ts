import { Component } from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

  employees: Employee[] | undefined;
  private employeeId: string | undefined;
  private employeeWorkedDays: bigint | undefined;


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    if (this.employeeId != null && this.employeeWorkedDays != null) {
      this.employeeService.updateWork(this.employeeId, this.employeeWorkedDays).subscribe(data => {

      });
    }
  }
}
