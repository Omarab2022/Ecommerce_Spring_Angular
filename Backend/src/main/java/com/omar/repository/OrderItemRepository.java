package com.omar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.omar.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
