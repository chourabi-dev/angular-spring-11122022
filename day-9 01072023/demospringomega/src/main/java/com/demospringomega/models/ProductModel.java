package com.demospringomega.models;

public class ProductModel {

	private String product;
	private int quantity;
	private float price;
	private int category;
	
	
	
	
	public int getCategory() {
		return category;
	}
	public void setCategory(int category) {
		this.category = category;
	}
	public String getProduct() {
		return product;
	}
	public int getQuantity() {
		return quantity;
	}
	public float getPrice() {
		return price;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public ProductModel() {
		super();
	}
	
	
	
}
