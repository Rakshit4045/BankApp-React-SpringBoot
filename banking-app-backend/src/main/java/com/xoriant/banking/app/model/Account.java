package com.xoriant.banking.app.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;

@Entity
@Data
public class Account {
	
//	public enum AccountType {
//		SAVINGS,
//		CURRENT,
//		SALARY
//	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int accountId;
	private double initialDeposit;
	private String accountType;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "customer_id", nullable = false)
	@JsonBackReference(value = "CustomerAccountReference")
	private Customer customer;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "manager_id", nullable = false)
	@JsonBackReference(value = "ManagerAccountReference")
	private Manager manager;
	
	@OneToMany(mappedBy = "senderAccount", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonManagedReference(value = "SenderAccountTransactionReference")
	List<Transaction> sendertransactionList;
	
	@OneToMany(mappedBy = "receiverAccount", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonManagedReference(value = "ReceiverAccountTransactionReference")
	List<Transaction> receivertransactionList;
	
}
