package com.demospringomega.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table( name="sells" )
public class Sells {

	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
 
	@ManyToOne
	@JoinColumn( name="products_id" ) 
	private Product product;

	@ManyToOne
	@JoinColumn( name="clients_id" ) 
	private Clients client;
	
	
	

	// !!!!!!! :D    i have the possobility to add more attiributes !!! 
	// LIKE date, payment mthod, magain, 
	
}
