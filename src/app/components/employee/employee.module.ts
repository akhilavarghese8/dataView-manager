import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeAddComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatSidenavModule, 
    MatListModule,    
    MatToolbarModule 
  ]
})
export class EmployeeModule { }
