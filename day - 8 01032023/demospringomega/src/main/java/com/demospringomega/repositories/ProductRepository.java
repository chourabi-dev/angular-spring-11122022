package com.demospringomega.repositories;

 

import org.springframework.data.jpa.repository.JpaRepository;

import com.demospringomega.entities.Product;

public interface ProductRepository extends JpaRepository<Product,Integer> {
 
}
