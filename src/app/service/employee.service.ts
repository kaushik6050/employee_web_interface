import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly employeesUrl: string;
  readonly vacationUrl: string;
  readonly workUrl: string;

  constructor(private http: HttpClient) {
    this.employeesUrl = 'http://localhost:8080/employees';
    this.vacationUrl = 'http://localhost:8080/vacation/{id}/{vacation}';
    this.workUrl = 'http://localhost:8080/work/{id}/{employeeWorkedDays}';
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  updateVacation(id: string , vacation: bigint): Observable<Employee> {
    const headers = new HttpHeaders().append('header', 'value');
    let params = new HttpParams();
    params.append('id', id);
    params.append('vacation',vacation.toString());
    return this.http.put<Employee>(this.vacationUrl, { headers, params });
  }

  updateWork(id: string , employeeWorkedDays: bigint): Observable<Employee> {
    const headers = new HttpHeaders().append('header', 'value');
    let params = new HttpParams();
    params.append('id', id);
    params.append('employeeWorkedDays',employeeWorkedDays.toString());
    return this.http.put<Employee>(this.workUrl, { headers, params });
  }

  }
