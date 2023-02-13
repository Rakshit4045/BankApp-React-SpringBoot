package com.xoriant.banking.app.service;

import java.util.List;

import com.xoriant.banking.app.model.Transaction;

public interface TransactionService {
	boolean addTransaction(Transaction transaction);
//	List<Transaction> getAllTransactionByAccountId(int accountId);
}
