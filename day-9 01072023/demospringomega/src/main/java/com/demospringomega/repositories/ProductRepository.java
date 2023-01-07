package com.demospringomega.repositories;

 

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demospringomega.entities.Product;

public interface ProductRepository extends JpaRepository<Product,Integer> {
 
	
	// find !!
	// one !! many !!!
	// Product
	// List<Product>
	
	
	List<Product> findByQuantity(int quantity); // SELECT * FROM PRODUCTS WHERE QUANTITY = ?
	
	List<Product> findByQuantityAndPrice(int quantity, float price);  
	
	Product findByProductLike(String product);
	
	@Query("SELECT p from Product p WHERE p.price <=  ?1") // JPQL
	List<Product> findByPrice(float price); 
	
	@Query( nativeQuery = true,  value="SELECT * from products" ) // SQL
	List<Product> getAllData( ); 
	
	
	
}
