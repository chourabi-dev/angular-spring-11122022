import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  form = new FormGroup({ 

    product : new FormControl("",Validators.required),
    quantity: new FormControl("",Validators.required),
    price: new FormControl("",Validators.required),
    category: new FormControl("",Validators.required),
  })


  categories:any[] = [];

  successMessage:string="";


  id;

  
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;


    this.api.getCategoriesList().toPromise().then((categories:any[])=>{
      this.categories = categories;
    })


    // fill the form !!!
    this.api.findProductByID(this.id).toPromise().then((res)=>{
      this.form.setValue(res);
    })


  }

  update(){
    const data = this.form.value;


    this.api.updateProduct( this.id, data).toPromise().then((res:any)=>{
      console.log(res);

      if (res.success == true) {
          this.successMessage = res.message
      }
      
    })
    
  }

}
