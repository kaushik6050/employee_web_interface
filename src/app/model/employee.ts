export class Employee {
  private _employeeId: string | undefined ;
  private _employeeName: string | undefined;
  private _vacationDays: bigint | undefined;
  private _employeeWorkedDays: bigint | undefined;
  private _employeeType: string | undefined;

/*
        this.employeeName = employeeName;
        this.employeeType = employeeType;
        this.vacationDays = 0;
        this.employeeWorkedDays = 260;
 */
  get employeeId(): string {
    return <string>this._employeeId;
  }

  set employeeId(value: string) {
    this._employeeId = value;
  }

  get employeeName(): string {
    return <string>this._employeeName;
  }

  set employeeName(value: string) {
    this._employeeName = value;
  }


  get vacationDays(): bigint | undefined {
    return this._vacationDays;
  }

  set vacationDays(value: bigint | undefined) {
    this._vacationDays = value;
  }

  get employeeWorkedDays(): bigint | undefined {
    return this._employeeWorkedDays;
  }

  set employeeWorkedDays(value: bigint | undefined) {
    this._employeeWorkedDays = value;
  }


  get employeeType(): string | undefined {
    return this._employeeType;
  }

  set employeeType(value: string | undefined) {
    this._employeeType = value;
  }
}
