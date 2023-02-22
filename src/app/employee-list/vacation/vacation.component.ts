import { Component } from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent {

  employees: Employee[] | undefined;
  private employeeId: string | undefined;
  private vacation: bigint | undefined;


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    if (this.employeeId != null&& this.vacation!=null) {
      this.employeeService.updateBudget(this.employeeId, this.vacation).subscribe(data => {

      });
    }

  }
}
