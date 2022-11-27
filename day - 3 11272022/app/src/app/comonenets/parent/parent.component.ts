import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  res:string="test";


  constructor() { }

  ngOnInit(): void {
  }



  getUnswareFromChild(message){
    this.res = message;
    console.log(this.res);
    
    // ...
    
  }

}
