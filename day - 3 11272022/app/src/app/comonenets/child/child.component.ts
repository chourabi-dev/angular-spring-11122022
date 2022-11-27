import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message:string;

  @Input() callFromParant:any

  constructor() { }

  ngOnInit(): void {
    
    
  }


  answare(){
    this.callFromParant("hello parent");
  }

}
