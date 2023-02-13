package com.xoriant.banking.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.banking.app.model.Address;
import com.xoriant.banking.app.model.Customer;
import com.xoriant.banking.app.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public Customer validateCustomer(String email, String password) {
		return customerRepository.getByEmailAndPassword(email, password);
	}

	@Override
	public boolean addCustomer(Customer customer) {
		customerRepository.save(customer);
		return true;
	}
	

	@Override
	public Customer findCustomerById(int customerId) {
		return customerRepository.findByCustomerId(customerId);
	}

	@Override
	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}

	@Override
	public boolean updateCustomer(int customerId, Customer customer) {
		Customer customerData = customerRepository.findByCustomerId(customerId);
		customerData.setDate(customer.getDate());
		customerData.setEmail(customer.getEmail());
		customerData.setGender(customer.getGender());
		customerData.setPassword(customer.getPassword());
		customerData.setTelephone(customer.getTelephone());
		Address addressData = customerData.getAddress();
		addressData.setAddressLineOne(customer.getAddress().getAddressLineOne());
		addressData.setAddressLineTwo(customer.getAddress().getAddressLineTwo());
		addressData.setCity(customer.getAddress().getCity());
		addressData.setPin(customer.getAddress().getPin());
		addressData.setState(customer.getAddress().getState());
		customerData.setAddress(addressData);
		customerRepository.save(customerData);
		return true;
	}

	@Override
	public List<Customer> getCustomerList(int managerId) {
		List<Customer> customerList = (List<Customer>) customerRepository.findByManagerManagerId(managerId);
		return customerList;
	}

	@Override
	public Customer findCustomerByManagerId(int managerId, int customerId) {
		return customerRepository.findByCustomerIdAndManagerManagerId(customerId, managerId);
	}

	@Override
	public boolean updateCustomerByManagerId(int customerId, int managerId, Customer customer) {
		Customer updateCustomer = customerRepository.findByCustomerIdAndManagerManagerId(customerId, managerId);
		updateCustomer.setDate(customer.getDate());
		updateCustomer.setEmail(customer.getEmail());
		updateCustomer.setGender(customer.getGender());
		updateCustomer.setTelephone(customer.getTelephone());
		Address addressData = updateCustomer.getAddress();
		addressData.setAddressLineOne(customer.getAddress().getAddressLineOne());
		addressData.setAddressLineTwo(customer.getAddress().getAddressLineTwo());
		addressData.setCity(customer.getAddress().getCity());
		addressData.setPin(customer.getAddress().getPin());
		addressData.setState(customer.getAddress().getState());
		updateCustomer.setAddress(addressData);
		customerRepository.save(updateCustomer);
		return true;
	}

	@Override
	public boolean deleteCustomerById(int customerId) {
		if(customerRepository.deleteByCustomerId(customerId) > 0) {
			return true;
		}
		return false;
	}

	@Override
	public boolean changePassword(int customerId, Customer customer) {
		Customer newCustomer = customerRepository.findByCustomerId(customerId);
		System.out.println(customer.getPassword());
		newCustomer.setPassword(customer.getPassword());
		System.out.println(newCustomer.getPassword());
		customerRepository.save(newCustomer);
		return true;
	}

	
	
}
