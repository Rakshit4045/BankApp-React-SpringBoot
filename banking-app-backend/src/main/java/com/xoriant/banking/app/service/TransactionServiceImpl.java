package com.xoriant.banking.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.banking.app.model.Account;
import com.xoriant.banking.app.model.Transaction;
import com.xoriant.banking.app.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {
	
	@Autowired
	private TransactionRepository transactionRepository;
	
	@Autowired
	private AccountServiceImpl accountServiceImpl;
	
	public boolean checkTransactionType(Transaction transaction) {
		if(transaction.getTransactionType().equals("deposit")) {
			return accountServiceImpl.DepositMoney(transaction.getSenderAccount().getAccountId(), transaction.getAmount());
		}else if(transaction.getTransactionType().equals("withdrawal")){
			System.out.println("============entered============");
			return accountServiceImpl.WithdrawMoney(transaction.getSenderAccount().getAccountId(), transaction.getAmount());
		}else {
			if(accountServiceImpl.DepositMoney(transaction.getReceiverAccount().getAccountId(), transaction.getAmount())) {				
				if(accountServiceImpl.WithdrawMoney(transaction.getSenderAccount().getAccountId(), transaction.getAmount())) {
					return true;
				}
			}
		}
		return false;
	}
	
//	@Override
//	public List<Transaction> getAllTransactionByAccountId(int accountId) {
//		return transactionRepository.findByAccountAccountId(accountId);
//	}

	@Override
	public boolean addTransaction(Transaction transaction) {
		transactionRepository.save(transaction);
		return checkTransactionType(transaction);
//		return true;
	}

}
