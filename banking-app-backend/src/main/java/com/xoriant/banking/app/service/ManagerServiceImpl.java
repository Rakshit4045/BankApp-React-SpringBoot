package com.xoriant.banking.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.banking.app.model.Manager;
import com.xoriant.banking.app.repository.ManagerRepository;

@Service
public class ManagerServiceImpl implements ManagerService {

	@Autowired
	private ManagerRepository managerRepository;
	
	@Override
	public Manager validateManager(String email, String password) {
		return managerRepository.getByEmailAndPassword(email, password);
	}

	@Override
	public Manager getManagerById(int managerId) {
		return managerRepository.getByManagerId(managerId);
	}

}
