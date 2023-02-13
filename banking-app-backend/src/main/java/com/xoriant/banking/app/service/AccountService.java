package com.xoriant.banking.app.service;

import java.util.List;

import com.xoriant.banking.app.model.Account;

public interface AccountService {
	boolean addAccount(Account account);
	Account getAccountByManagerId(int accountId, int managerId);
	boolean updateAccountByManagerId(int accountId, int managerId, Account account);
	List<Account> getAccountListByManagerId(int managerId);
	List<Account> getAccountListByCustomerId(int customerId);
	boolean deleteAccountById(int accountId);
}
