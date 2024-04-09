package com.nocountry.apirest.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.apirest.exception.MotionNotFoundException;
import com.nocountry.apirest.model.Motion;
import com.nocountry.apirest.model.User;
import com.nocountry.apirest.repository.IMotionRepository;
import com.nocountry.apirest.repository.IUserRepository;

import jakarta.transaction.Transactional;

@Service
public class MotionServiceImpl implements IMotionService {
	
	@Autowired
	private IMotionRepository motionRepository;
	@Autowired
	private IUserRepository userRepository;
	
	//saveMotion() method with automatic status assignment
	@Transactional
	public void saveMotion(Integer userId, String typeOperation, Double amount, Double interestRate) 
			throws MotionNotFoundException {
		
		validate(userId, typeOperation, amount, interestRate);
		
		User user = userRepository.findById(userId).get();
		Motion motion = new Motion();
		
		motion.setUser(user);
		motion.setTypeOperation(typeOperation);
		motion.setAmount(amount);
		motion.setInterestRate(interestRate);
		motion.setStartDate(new Date());
		motion.setDueDate(null);
		
		byte status = assignStatus(typeOperation);
		motion.setStatus(status);
		
		motionRepository.save(motion);
	}

	//List 
	public List<Motion> getMotions() {
		return motionRepository.findAll();
	}
	
	//Edit 
	public void editMotion(Integer id, byte status) {
		
		Optional<Motion> answer = motionRepository.findById(id);
		
		if (answer.isPresent()) {
			Motion motion = answer.get();
			
			motion.setStatus(status);
			
			motionRepository.save(motion);
		}
	}
	
	// Method to automatically assign status
	private byte assignStatus(String typeOperation) {
		
		byte status = 0; //Default status
	    // Logic to determine the status based on the type of operation
		if (typeOperation.equals("Loan")) {
	        status = 1; 
	    } else if (typeOperation.equals("Investment")) {
	        status = 2; 
	    }
		
		return status;
	}
	
	//Validate
	private void validate (Integer userId, String typeOperation, Double amount, Double interestRate) {
		if(userId == null) {
			throw new MotionNotFoundException ("El id de usuario no puede ser nulo");
		}
		
		if(typeOperation.isEmpty() || typeOperation == null) {
			throw new MotionNotFoundException ("El tipo de operación no puede ser nulo o estar vacío");
		}
		
		if(amount == null) {
			throw new MotionNotFoundException ("El monto no puede ser nulo");
		}
		
		if(interestRate == null) {
			throw new MotionNotFoundException ("La tasa de interes no puede ser nula");
		}
	}
	

}
