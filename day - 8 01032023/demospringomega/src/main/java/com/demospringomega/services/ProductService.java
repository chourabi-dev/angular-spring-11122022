package com.demospringomega.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demospringomega.repositories.ProductRepository;

@Service
public class ProductService {

	
	
	// INTERFACE => SELECT INSERT UPDATE DELETE => Repository
	
	
	@Autowired
	private ProductRepository productRepository;

	
	public ProductRepository getProductRepository() {
		return productRepository;
	}
	
	
	
	
}
