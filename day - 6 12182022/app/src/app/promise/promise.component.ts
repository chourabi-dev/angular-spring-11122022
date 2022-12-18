import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.takePhoto();
  }



  getCamera(){
    let cameraPromise = new Promise(( success,failure )=>{
      setTimeout(()=>{
        failure( { message:"caanot get the camera" } );
      },3000)
    });

    return cameraPromise;
  }



  async takePhoto(){
    /*console.log("about to contact the camera"); 
    const camera = await this.getCamera(); 
    console.log(camera);*/


    this.getCamera().then((data)=>{

      

    }).catch( (error)=>{
      console.log(error);
      
    });

    
  }



}
