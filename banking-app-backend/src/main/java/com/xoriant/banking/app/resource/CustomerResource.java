package com.xoriant.banking.app.resource;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.banking.app.model.Customer;
import com.xoriant.banking.app.service.CustomerService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/v1/customer")
public class CustomerResource {
	
	@Autowired
	private CustomerService customerService;
	
	
	@PostMapping("/login")
	public Customer validateCustomer(@RequestBody Customer param) {
		Customer customer = customerService.validateCustomer(param.getEmail(), param.getPassword());
		return customer;
	}
	
	@PostMapping("/")
	public boolean addCustomer(@RequestBody Customer requestBody) {
		System.out.println(requestBody);
		System.out.println(customerService.addCustomer(requestBody));
		return true;
	}
	
	@PutMapping("/{id}")
	public boolean updateCustomer(@PathVariable("id") int customerId,@RequestBody Customer requestBody) {
		System.out.println(requestBody);
		customerService.updateCustomer(customerId, requestBody);
		return true;
	}
	
	@GetMapping("/allcustomer")
	public List<Customer> getAllCustomer(){
		return customerService.getAllCustomer();
	}
	
	@GetMapping("/{id}/allcustomer")
	public List<Customer> getAllCustomerByManagerId(@PathVariable("id") int managerId){
		return customerService.getCustomerList(managerId);
	}
	
	@GetMapping("/{managerId}/manager/{customerId}")
	public Customer getCustomerByManagerId(@PathVariable("managerId") int managerId, @PathVariable("customerId") int customerId) {
		return customerService.findCustomerByManagerId(customerId, managerId);
	}
	
	@PutMapping("/{customerId}/manager/{managerId}")
	public boolean updateCustomerByManagerId(@PathVariable("managerId") int managerId, @PathVariable("customerId") int customerId, @RequestBody Customer customer) {
				customerService.updateCustomerByManagerId(customerId, managerId, customer);
				return true;
	}
	
	@DeleteMapping("/{customerId}")
	public boolean deleteCustomerById(@PathVariable("customerId") int customerId) {
		return customerService.deleteCustomerById(customerId);
	}
	
	@PutMapping("/changepassword/{customerId}")
	public boolean changePassword(@PathVariable("customerId") int customerId, @RequestBody Customer customer) {
		return customerService.changePassword(customerId, customer);
	}
	
	
	@GetMapping("/{id}")
	public Customer findCustomerById(@PathVariable("id") int customerId) {
//		System.out.println(customerId);
//		Customer customer = customerService.findCustomerById(customerId);
//		System.out.println(customer);
		return customerService.findCustomerById(customerId);
	}
	
	
	
}
