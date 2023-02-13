package com.xoriant.banking.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.banking.app.model.Account;
import com.xoriant.banking.app.model.Address;
import com.xoriant.banking.app.model.Customer;
import com.xoriant.banking.app.model.Manager;
import com.xoriant.banking.app.repository.AccountRepository;

@Service
public class AccountServiceImpl implements AccountService {

	
	@Autowired
	private AccountRepository accountRepository;
	
	public boolean DepositMoney(int accountId, double amount) {
		Account account = accountRepository.findByAccountId(accountId);
		account.setInitialDeposit(account.getInitialDeposit() + amount);
		accountRepository.save(account);
		return true;
	}
	
	public boolean WithdrawMoney(int accountId, double amount) {
		Account account = accountRepository.findByAccountId(accountId);
		if(account.getInitialDeposit() >= amount) {
			account.setInitialDeposit(account.getInitialDeposit() - amount);
			accountRepository.save(account);
			return true;
		}
		return false;
	}
	
	@Override
	public boolean addAccount(Account account) {
		accountRepository.save(account);
		return true;
	}

	@Override
	public List<Account> getAccountListByManagerId(int managerId) {
		return accountRepository.findByManagerManagerId(managerId);
	}

	@Override
	public List<Account> getAccountListByCustomerId(int customerId) {
		return accountRepository.findByCustomerCustomerId(customerId);
	}

	@Override
	public Account getAccountByManagerId(int accountId, int managerId) {
		return accountRepository.findByAccountIdAndManagerManagerId(accountId, managerId);
	}

	@Override
	public boolean updateAccountByManagerId(int accountId, int managerId, Account account) {
		Account updateAccount = accountRepository.findByAccountIdAndManagerManagerId(accountId, managerId);
		updateAccount.setAccountType(account.getAccountType());
		updateAccount.setInitialDeposit(account.getInitialDeposit());
		Customer customerData = updateAccount.getCustomer();
		customerData.setCustomerId(account.getCustomer().getCustomerId());
		updateAccount.setCustomer(customerData);
		Manager managerData = updateAccount.getManager();
		managerData.setManagerId(account.getManager().getManagerId());
		updateAccount.setManager(managerData);
		accountRepository.save(updateAccount);
		return true;
	}

	@Override
	public boolean deleteAccountById(int accountId) {
		if(accountRepository.deleteByAccountId(accountId) > 0) {
			return true;
		}
		return false;
	}
	
	

}
