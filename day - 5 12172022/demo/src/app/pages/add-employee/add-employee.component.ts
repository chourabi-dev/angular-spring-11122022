import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm = new FormGroup(
    {
      fullname: new FormControl("", [ Validators.required, Validators.minLength(6) ] ),
      email: new FormControl("", [ Validators.required, Validators.email ] ),
      department: new FormControl("",Validators.required),
      
    }
  );


  departments = [
    { id:1 , name:"Dep-1" },
    { id:2 , name:"Dep-2" },
    { id:3 , name:"Dep-3" },
    
  ];


  constructor( private employeeService:EmployeesService, private router:Router ) { }

  ngOnInit(): void {
    console.log(this.employeeForm);
    
  }

  saveEmployee(){
    
    // send data to service

    this.employeeService.addEmployee(this.employeeForm.value);

    // redirect to employees list !!
    this.router.navigateByUrl('employees');
  }

}
