package com.xoriant.banking.app.service;

import java.util.List;

import com.xoriant.banking.app.model.Customer;
import com.xoriant.banking.app.model.Manager;

public interface ManagerService {
	Manager validateManager(String email, String password);
	Manager getManagerById(int managerId);
}
