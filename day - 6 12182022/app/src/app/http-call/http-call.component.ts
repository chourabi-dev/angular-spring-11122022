import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css']
})
export class HttpCallComponent implements OnInit {

  isLoading:boolean = false;
  hasError:boolean = false;

  users=[];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){

    this.isLoading = true;

    this.api.getUsersListAPI().toPromise().then((users:any[])=>{
      console.log(users);

      this.users = users;
      
    }).catch(()=>{
      this.hasError = true;
    }).finally(()=>{
      this.isLoading = false;
    })

    
  }

}
