package com.omar.service;

import com.omar.exception.ProductException;
import com.omar.modal.Cart;
import com.omar.modal.CartItem;
import com.omar.modal.User;
import com.omar.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public CartItem addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
