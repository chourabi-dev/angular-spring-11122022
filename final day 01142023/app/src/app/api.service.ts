import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getProductsList(){
    return this.http.get("http://localhost:8080/api/products/list", {
      headers: new HttpHeaders({
        "authoraztion":localStorage.getItem("token") ,
        
      })
    })
  }

  getCategoriesList(){
    return this.http.get("http://localhost:8080/api/categories/list")
  }

  addProduct(data){
    return this.http.post("http://localhost:8080/api/products/add",data)
  }

  deleteProductByID(id){
    return this.http.delete("http://localhost:8080/api/products/delete/"+id)
  }

  findProductByID(id){
    return this.http.get("http://localhost:8080/api/products/find/"+id)
  }

  

  updateProduct(id,data){
    return this.http.put("http://localhost:8080/api/products/update/"+id,data)
  }

  
}
