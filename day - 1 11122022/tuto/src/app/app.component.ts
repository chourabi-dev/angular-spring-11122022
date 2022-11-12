import { Component } from '@angular/core';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'tuto'; 
  year = 2022; 
  age:number; 
  success:boolean = true; 
  user:any; 
  employee = { name:"chourabi taher", email:'tchourabi@gmail.com'  }; 
  today:Date = new Date(); 


  employees:string[] = [ "chourabi taher", "mouhamed", "Hedi" ]

 
  workers:Employee[] = [
    { fullname:"chourabi taher 1",email:"tchourabi@gmail.com",year:2010 },
    { fullname:"chourabi taher 2",email:"tchourabi@gmail.com",year:2012 },
    { fullname:"chourabi taher 3",email:"tchourabi@gmail.com",year:2013 },
    { fullname:"chourabi taher 4",email:"tchourabi@gmail.com",year:2017 },
    { fullname:"chourabi taher 5",email:"tchourabi@gmail.com",year:2019 },
    

  ]



}
