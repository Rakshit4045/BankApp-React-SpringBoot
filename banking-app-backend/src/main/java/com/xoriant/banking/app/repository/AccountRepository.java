package com.xoriant.banking.app.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xoriant.banking.app.model.Account;
import com.xoriant.banking.app.model.Customer;


public interface AccountRepository extends JpaRepository<Account, Integer> {
	Account findByAccountId(int accountId);
	Account findByAccountIdAndManagerManagerId(int accountId, int managerId);
	List<Account> findByManagerManagerId(int managerId);
	List<Account> findByCustomerCustomerId(int customerId);
	@Transactional
	int deleteByAccountId(int accountId);
}
