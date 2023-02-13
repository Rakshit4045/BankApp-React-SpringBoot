package com.xoriant.banking.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

//@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"})
@Data
@Entity
@Table(name = "address")
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String addressLineOne;
	private String addressLineTwo;
	private String city;
	private String state;
	private long pin;
//	@OneToOne(mappedBy = "address")
//	private Customer customer;
}
