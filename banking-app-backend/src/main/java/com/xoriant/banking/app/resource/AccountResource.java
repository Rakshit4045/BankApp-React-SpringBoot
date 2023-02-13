package com.xoriant.banking.app.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.banking.app.model.Account;
import com.xoriant.banking.app.service.AccountService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/account")
public class AccountResource {
	
	@Autowired
	private AccountService accountService;
	
	@PostMapping("/")
	public boolean addAccount(@RequestBody Account requestBody) {
		accountService.addAccount(requestBody);
		return true;
	}
	
	@GetMapping("/{accountId}/manager/{managerId}")
	public Account getAccountByManagerId(@PathVariable("accountId") int accountId, @PathVariable("managerId") int managerId) {
		return accountService.getAccountByManagerId(accountId, managerId);
	}
		
	@GetMapping("/{id}/manageraccountlist")
	public List<Account> getAccountListByManagerId(@PathVariable("id") int managerId) {
		return accountService.getAccountListByManagerId(managerId);
	}
	
	@GetMapping("/{id}/customeraccountlist")
	public List<Account> getAccountListByCustomerId(@PathVariable("id") int customerId){
		return accountService.getAccountListByCustomerId(customerId);
	}
	
	@PutMapping("/{accountId}/manager/{managerId}")
	public boolean updateAccountByManagerId(@PathVariable("accountId") int accountId, @PathVariable("managerId") int managerId, @RequestBody Account account) {
		return accountService.updateAccountByManagerId(accountId, managerId, account);
	}
	
	@DeleteMapping("/{accountId}")
	public boolean deleteAccountById(@PathVariable("accountId") int accountId) {
		return accountService.deleteAccountById(accountId);
	}
}
