import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeesComponent } from './pages/employees/employees.component';


const routes: Routes = [
  { path:'', component:AddEmployeeComponent },
  { path:'employees', component:EmployeesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
