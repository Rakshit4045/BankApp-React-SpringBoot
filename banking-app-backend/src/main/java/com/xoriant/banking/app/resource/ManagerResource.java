package com.xoriant.banking.app.resource;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.banking.app.model.Customer;
import com.xoriant.banking.app.model.Manager;
import com.xoriant.banking.app.service.CustomerService;
import com.xoriant.banking.app.service.ManagerService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/v1/manager")
public class ManagerResource {
	
	@Autowired
	private ManagerService managerService;
	private CustomerService customerService;
	
	@CrossOrigin(origins="*")
	
//	@PostMapping("/login")
//	public String getCustomerList() {
//		return "redirect:../customer/customerlist";
//	}
	
	@PostMapping("/login")
	public Manager validateManager(@RequestBody Manager requestBody) {
//		List<Customer> customerList = customerService.getCustomerList(requestBody.getManagerId());
//		requestBody.setCustomerList(customerList);
		Manager manager = managerService.validateManager(requestBody.getEmail(), requestBody.getPassword());
		System.out.println("============================");
		System.out.println(manager);
		System.out.println("============================");
		return manager;
	}
	
	@GetMapping("/{id}")
	public Manager getManagerById(@PathVariable("id") int managerId) {
		return managerService.getManagerById(managerId);
	}
	
	
}
