import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /*
  notes:number[] = [ 1,2,3,4,5,6,8,9,6 ];


  content = "<h1>bonjour</h1>";

  color = "red"; */


  // events


  /*
  
  count = 0;

  buttonClick(){
    console.log("clicked !!");

    this.count++;
    
  }

  */

/*
  index = 0;

  images:string[] = [
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg',
    'https://cdn.stocksnap.io/img-thumbs/280h/blue-night_DBUU6N5YUY.jpg'
  ]

  // 15 12 19 16   4 

  // 0 1 2 3 4
  next(){
    
    if (  (this.index + 1 ) == this.images.length ) {
      this.index = 0;
    }else{
      this.index++;

    }

  }


  prev(){
    if (  (this.index -1 ) < 0  ) {
      this.index = ( this.images.length - 1)
    }else{
      this.index--;
    }
  }
*/




mouseIsMoving(e:MouseEvent){
  console.log(e.clientX,e.clientY);
  
}



}
