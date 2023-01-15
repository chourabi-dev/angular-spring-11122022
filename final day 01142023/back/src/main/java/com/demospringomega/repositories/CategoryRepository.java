package com.demospringomega.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demospringomega.entities.Category;

public interface CategoryRepository extends JpaRepository<Category,Integer> {

}
