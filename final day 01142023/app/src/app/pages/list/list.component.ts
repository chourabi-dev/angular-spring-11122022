import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:any[] = [];



  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }


  initData(){
    this.api.getProductsList().toPromise().then( (data:any[])=>{
       console.log(data);

       this.products = data;

     } ).catch( (error)=>{ console.log(error);
     } )
  }



  deleteProduct(id){
    console.log(id);

    this.api.deleteProductByID(id).toPromise().then(()=>{

      this.initData();

    })
    
  }

}
