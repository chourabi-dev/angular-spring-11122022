import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  employees =[];

  constructor(private employeesService:EmployeesService) { }

  ngOnInit(): void {
    console.log("navbar init");

    this.employees = this.employeesService.employees;
    
  }

}
