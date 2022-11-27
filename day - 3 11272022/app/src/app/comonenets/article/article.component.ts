import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() title:string;
  @Input() content:string;
  @Input() likes:number;


  didLike:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  like(){

    if (this.didLike === false) {
      this.likes++;
    }else{
      this.likes--;
    }


    this.didLike = ! this.didLike
  }

}
