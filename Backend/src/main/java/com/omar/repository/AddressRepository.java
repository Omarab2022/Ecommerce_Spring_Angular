package com.omar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.omar.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
