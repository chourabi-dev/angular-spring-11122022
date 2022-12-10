import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = [
    { id:1 , name:"chourabi taher 1" },
    { id:2 , name:"chourabi taher 2" },
    { id:3 , name:"chourabi taher 3" },
    
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
