package com.nocountry.apirest.service;

import java.util.List;

import com.nocountry.apirest.model.Motion;

public interface IMotionService {
	
	public void saveMotion(Integer userId, String typeOperation, Double amount, Double interestRate);
	public List<Motion> getMotions();
	public void editMotion(Integer id, byte status);

}
