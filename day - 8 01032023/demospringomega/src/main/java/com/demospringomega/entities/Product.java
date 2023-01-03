package com.demospringomega.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name="products" )
public class Product {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column( name="product_name" , nullable=false )
	private String product;
	
	@Column( name="product_price" , nullable=false )
	private float price;
	
	
	@Column( name="product_quantity" , nullable=false )
	private int quantity;


	 


	public Product() {
		super();
	}


 

	public String getProduct() {
		return product;
	}


	public float getPrice() {
		return price;
	}


	public int getQuantity() {
		return quantity;
	}


 

	public void setProduct(String product) {
		this.product = product;
	}


	public void setPrice(float price) {
		this.price = price;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}




	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}




	public Product(int id, String product, float price, int quantity) {
		super();
		this.id = id;
		this.product = product;
		this.price = price;
		this.quantity = quantity;
	}
	
	
	
	
	
	
}
