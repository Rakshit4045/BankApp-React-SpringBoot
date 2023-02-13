package com.xoriant.banking.app.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xoriant.banking.app.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	Customer getByEmailAndPassword(String email, String password);
	List<Customer> findByManagerManagerId(int managerId);
	Customer findByCustomerId(int customerId);
	Customer findByCustomerIdAndManagerManagerId (int customerId, int managerId);
	@Transactional
	int deleteByCustomerId(int customerId);
}	
