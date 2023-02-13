package com.xoriant.banking.app.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.core.sym.Name;

import lombok.Data;

@Data
@Entity
@Table(name = "transaction")
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int transactionId;
//	private int senderAccountId;
//	private int receiverAccountId;
	private String transactionType;
	private double amount;
	private String description = null;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = true)
	@JoinColumn(name = "sender_account_id")
	@JsonBackReference(value = "SenderAccountTransactionReference")
	private Account senderAccount;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = true)
	@JoinColumn(name = "receiver_account_id", nullable = true)
	@JsonBackReference(value = "ReceiverAccountTransactionReference")
	private Account receiverAccount = null;
	
}
