import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



  today = new Date();



  formatDate(date:Date){
    return date.getDate()+'/'+(date.getMonth()+1)+"/"+date.getFullYear();
  }








}
