package com.omar.service;

import java.util.List;

import com.omar.exception.ProductException;
import com.omar.modal.Rating;
import com.omar.modal.User;
import com.omar.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
