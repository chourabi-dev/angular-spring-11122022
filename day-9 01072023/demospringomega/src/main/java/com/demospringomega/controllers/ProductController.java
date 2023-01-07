package com.demospringomega.controllers;

import java.util.HashMap;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demospringomega.entities.Product;
import com.demospringomega.models.JsonReponse;
import com.demospringomega.models.ProductModel;
import com.demospringomega.services.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	
	
	// REQUEST => RESPONSE
	// REPONSE => SUCCESS // FAILURE
	// SUCCESS=> 200
	// error security 40*
	// error server 50*

	
	@Autowired
	private ProductService productService;
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getAll(){
		return ResponseEntity.ok(   this.productService.getProductRepository().findAll()    ); // 200
	}
	
	
	
	@PostMapping("/add")
	public ResponseEntity<?> insert( @RequestBody ProductModel model ){
		
		// 1 CREATE THE ENTITY
		
		Product product = new Product();
		
		
		// 2 fill the data
		
		product.setProduct( model.getProduct() );
		product.setPrice(model.getPrice());
		product.setQuantity(model.getQuantity()); 
		product.setCategory( this.productService.getCategoryRepository().findById(model.getCategory()).get() );
		
		
		// 3 save the entity !! ( INSERT )
		
		this.productService.getProductRepository().save( product );
		
		// 4 let the user know that we are OK !!!
		
		/*HashMap<String,String> res = new HashMap<String,String>(); 
		res.put("success", "product inserted successfully");*/
		
		JsonReponse res = new JsonReponse();
		
		res.setMessage("product inserted successfully");
		res.setSuccess(true);
		
		return ResponseEntity.ok(   res    ); // 200
		
		
	}
	
	
	

	@PutMapping("/update/{id}")
	public ResponseEntity<?> update( @RequestBody ProductModel model, @PathVariable int id ){
		
		try {
			// find the entity
			
			Product product = this.productService.getProductRepository().findById(id).get();
			
			 
			// 2 fill the data
			
			product.setProduct( model.getProduct() );
			product.setPrice(model.getPrice());
			product.setQuantity(model.getQuantity());
			product.setCategory( this.productService.getCategoryRepository().findById(model.getCategory()).get() );
			
			// 3 save the entity !! ( UPDATE )
			
			this.productService.getProductRepository().save( product );
			
			// 4 let the user know that we are OK !!!
			
			/*HashMap<String,String> res = new HashMap<String,String>(); 
			res.put("success", "product inserted successfully");*/
			
			JsonReponse res = new JsonReponse();
			
			res.setMessage("product updated successfully");
			res.setSuccess(true);
			
			return ResponseEntity.ok(   res    ); // 200
		}catch(NoSuchElementException e) {
			
			
			JsonReponse res = new JsonReponse();
			
			res.setMessage("product not found");
			res.setSuccess(false);
			
			return ResponseEntity.status(404).body(res);
		}
		
		
		
	}
	
	
	
	
	

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(   @PathVariable int id ){
		
		try {
			// find the entity
			
			Product product = this.productService.getProductRepository().findById(id).get();
			 
			this.productService.getProductRepository().delete( product );
			
			// 4 let the user know that we are OK !!!
			 
			
			JsonReponse res = new JsonReponse();
			
			res.setMessage("product deleted successfully");
			res.setSuccess(true);
			
			return ResponseEntity.ok(   res    ); // 200
			
			
		}catch(NoSuchElementException e) {
			
			
			JsonReponse res = new JsonReponse();
			
			res.setMessage("product not found");
			res.setSuccess(false);
			
			return ResponseEntity.status(404).body(res);
		}
		
		
		
	}
	
}
