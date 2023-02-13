package com.xoriant.banking.app.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.json.JsonWriteFeature;

import lombok.Data;


//@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"})
@Data
@Entity
@Table(name = "customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@PrimaryKeyJoinColumn
	private int customerId;
	private String email;
	private String password = "Newuser@123";
	private String gender;
	private String date;
	private long telephone;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name="address_id")
	private Address address;
	
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	@JsonManagedReference(value = "CustomerAccountReference")
	List<Account> accountList = null;
	

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name="manager_id")
	@JsonBackReference(value = "CustomerManagerReference")
	private Manager manager;
}
