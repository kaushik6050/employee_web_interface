import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeListComponent} from "./employee-list/employee-list/employee-list.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {EmployeeService} from "./service/employee.service";
import { VacationComponent } from './employee-list/vacation/vacation.component';
import { WorkComponent } from './employee-list/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    VacationComponent,
    WorkComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
