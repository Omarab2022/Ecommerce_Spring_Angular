package com.omar.service;

import java.util.List;

import com.omar.exception.ProductException;
import com.omar.modal.Review;
import com.omar.modal.User;
import com.omar.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
