package com.demospringomega.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demospringomega.models.SommeModel;



@RestController
@RequestMapping("/main")
public class AppController {

	@GetMapping("/api/hello")
	public String sayHello() {
		return "hello world";
	}
	
	
	
	// request params !!!!!
	

	@GetMapping("/api/somme")
	public int somme(  int x, @RequestParam( name="y", required=true )  int y   ) {
		
		return (x+y);
		
	}
	
	
	
	// GET DATA FROM POST BODY !!!!
	
	@PostMapping("/api/somme2")
	public int somme2( @RequestBody SommeModel model ) {
		
		System.out.println( model.getX() );
		
		return ( model.getX() + model.getY() );
		
	}
	
	
	// PATH VARIABLE !!
	
	// GET !!! 
	
	// EMPLOYEE ID 15855
	
	@GetMapping("/employee/data/{id}")
	public void employee( @PathVariable( name="id" ) int id ) {
		
		System.out.println( id );
		
		// SELECT * FROM EMPLOYEE WHERE ID  = ?
		
		
	}


	
}
