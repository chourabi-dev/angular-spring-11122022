package com.demospringomega.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demospringomega.entities.Category;
import com.demospringomega.services.ProductService;



@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "*", maxAge = 3600)

public class CategoryController {

	
	@Autowired
	private ProductService productService;
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getAll(){
		return ResponseEntity.ok(   this.productService.getCategoryRepository().findAll()    ); // 200
	}
	 
}
