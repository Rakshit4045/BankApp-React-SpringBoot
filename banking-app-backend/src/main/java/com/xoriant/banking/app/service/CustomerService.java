package com.xoriant.banking.app.service;

import java.util.List;

import com.xoriant.banking.app.model.Customer;

public interface CustomerService {
	Customer validateCustomer(String email, String password);
	boolean addCustomer(Customer customer);
	boolean updateCustomer(int customerId, Customer customer);
	List<Customer> getCustomerList(int managerId);
	List<Customer> getAllCustomer();
	Customer findCustomerById(int customerId);
	Customer findCustomerByManagerId(int customerId, int managerId);
	boolean updateCustomerByManagerId(int customerId, int managerId, Customer customer);
	boolean deleteCustomerById(int customerId);
	boolean changePassword(int customerId, Customer customer);
}
