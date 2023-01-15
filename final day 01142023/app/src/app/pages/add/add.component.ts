import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form = new FormGroup({ 

    product : new FormControl("",Validators.required),
    quantity: new FormControl("",Validators.required),
    price: new FormControl("",Validators.required),
    category: new FormControl("",Validators.required),
  })


  categories:any[] = [];

  successMessage:string="";

  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getCategoriesList().toPromise().then((categories:any[])=>{
      this.categories = categories;
    })
  }

  add(){
    const data = this.form.value;


    this.api.addProduct(data).toPromise().then((res:any)=>{
      console.log(res);

      if (res.success == true) {
          this.successMessage = res.message
      }
      
    })
    
  }

}
