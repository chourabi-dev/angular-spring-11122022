import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



  }


  trackUser(){

    let watcher = new Observable((observer)=>{
 
      navigator.geolocation.watchPosition((position)=>{
        observer.next(position);
      },(error)=>{
        observer.error(error);
      })

    })


    return watcher;

  }


  startWatch(){
    this.trackUser().subscribe( (data)=>{
      console.log(data);
      
    }, (error)=>{
      console.log(error);
      
    } )
  }




}
