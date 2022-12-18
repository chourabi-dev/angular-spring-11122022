import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees = [];

  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
    console.log("init employees !!!");
    
    this.employees= this.employeeService.employees;
  }

}
