package com.xoriant.banking.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xoriant.banking.app.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
//	List<Transaction> findByAccountAccountId(int accountId);
//	Transaction findByTransactionIdAndAccountAccountId(int transactionId, int accountId);
}
