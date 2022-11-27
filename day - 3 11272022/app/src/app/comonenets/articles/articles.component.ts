import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  data = [
    { title:"HTML", likes:18, content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aliquam quae odio quasi voluptas tempora eius tempore ab laborum quaerat voluptates consectetur architecto culpa, vero perferendis sequi. Repellendus, est natus!" },
    { title:"CSS", likes:100, content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aliquam quae odio quasi voluptas tempora eius tempore ab laborum quaerat voluptates consectetur architecto culpa, vero perferendis sequi. Repellendus, est natus!" },
    { title:"REACT", likes:50, content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aliquam quae odio quasi voluptas tempora eius tempore ab laborum quaerat voluptates consectetur architecto culpa, vero perferendis sequi. Repellendus, est natus!" },
    { title:"ANGULAR", likes:16, content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aliquam quae odio quasi voluptas tempora eius tempore ab laborum quaerat voluptates consectetur architecto culpa, vero perferendis sequi. Repellendus, est natus!" },
    { title:"SPRING", likes:0, content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aliquam quae odio quasi voluptas tempora eius tempore ab laborum quaerat voluptates consectetur architecto culpa, vero perferendis sequi. Repellendus, est natus!" },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
