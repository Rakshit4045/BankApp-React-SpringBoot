package com.xoriant.banking.app.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;

@Entity
@Data
public class Manager {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int managerId;
	private String email;
	private String password;
	
	@OneToMany(mappedBy = "manager", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonManagedReference(value = "CustomerManagerReference")
	private List<Customer> customerList;
	
	@OneToMany(mappedBy = "manager", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonManagedReference(value = "ManagerAccountReference")
	private List<Account> accountList;
	
}
