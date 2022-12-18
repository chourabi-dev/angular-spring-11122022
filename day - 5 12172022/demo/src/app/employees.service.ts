import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees:any[] = [];



  constructor() { }


  addEmployee(employee:any){
    this.employees.push(employee)
  }

}
