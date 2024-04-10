package com.nocountry.apirest.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.apirest.exception.LoanNotFoundException;
import com.nocountry.apirest.model.Loan;
import com.nocountry.apirest.model.User;
import com.nocountry.apirest.repository.ILoanRepository;
import com.nocountry.apirest.repository.IUserRepository;

import jakarta.transaction.Transactional;

@Service
public class LoanServiceImpl implements ILoanService {
	
	@Autowired
	private ILoanRepository loanRepository;
	@Autowired
	private IUserRepository userRepository;
	
	//saveLoan() method with automatic status assignment
	@Transactional
	public void saveLoan(Integer userId, String typeOperation, Double amount, Double interestRate) 
			throws LoanNotFoundException {
		
		validate(userId, typeOperation, amount, interestRate);
		
		User user = userRepository.findById(userId).get();
		Loan loan = new Loan();
		
		loan.setUser(user);
		loan.setTypeOperation(typeOperation);
		loan.setAmount(amount);
		loan.setInterestRate(interestRate);
		loan.setStartDate(new Date());
		loan.setDueDate(null);
		
		byte status = assignStatus(typeOperation);
		loan.setStatus(status);
		
		loanRepository.save(loan);
	}

	//List 
	public List<Loan> getLoans() {
		return loanRepository.findAll();
	}
	
	//Edit 
	public void editLoan(Integer id, byte status) {
		
		Optional<Loan> answer = loanRepository.findById(id);
		
		if (answer.isPresent()) {
			Loan loan = answer.get();
			
			loan.setStatus(status);
			
			loanRepository.save(loan);
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
			throw new LoanNotFoundException ("El id de usuario no puede ser nulo");
		}
		
		if(typeOperation.isEmpty() || typeOperation == null) {
			throw new LoanNotFoundException ("El tipo de operación no puede ser nulo o estar vacío");
		}
		
		if(amount == null) {
			throw new LoanNotFoundException ("El monto no puede ser nulo");
		}
		
		if(interestRate == null) {
			throw new LoanNotFoundException ("La tasa de interes no puede ser nula");
		}
	}
	

}
