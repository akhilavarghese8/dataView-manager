import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';

const routes: Routes = [

  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "employee",
        pathMatch: "full"
      },
      {
        path: 'employee',
        loadChildren: () => 
          import('./components/employee/employee.module').then(
            m => m.EmployeeModule
          )
      },
      {
        path: 'apidatatable',
        loadChildren: () => 
          import('./components/api-data-table/api-data-table.module').then(
            m => m.APIDataTableModule
          )
      },
      {
        path:'**',
        pathMatch:'full',
        component:ErrorPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
