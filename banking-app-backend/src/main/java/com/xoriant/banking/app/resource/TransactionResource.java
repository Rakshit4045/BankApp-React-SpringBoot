package com.xoriant.banking.app.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.banking.app.model.Transaction;
import com.xoriant.banking.app.service.TransactionService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/transaction")
public class TransactionResource {
	
	@Autowired
	private TransactionService transactionService;
	
	@PostMapping("/")
	public boolean addTransaction(@RequestBody Transaction requestBody) {
		transactionService.addTransaction(requestBody);
		return true;
	}
	
}
