package com.xoriant.banking.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xoriant.banking.app.model.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {
}
