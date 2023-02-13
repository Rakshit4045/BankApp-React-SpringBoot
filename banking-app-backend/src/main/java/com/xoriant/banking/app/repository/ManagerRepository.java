package com.xoriant.banking.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xoriant.banking.app.model.Customer;
import com.xoriant.banking.app.model.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Integer> {
	Manager getByEmailAndPassword(String email, String password);
	Manager getByManagerId(int managerId);
}