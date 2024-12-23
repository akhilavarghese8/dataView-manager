import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APIDataTableRoutingModule } from './api-data-table-routing.module';
import { APIDataTableListComponent } from './components/api-data-table-list/api-data-table-list.component';


@NgModule({
  declarations: [
    APIDataTableListComponent
  ],
  imports: [
    CommonModule,
    APIDataTableRoutingModule
  ]
})
export class APIDataTableModule { }
