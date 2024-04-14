package com.nocountry.apirest.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.apirest.exception.LoanNotFoundException;
import com.nocountry.apirest.model.File;
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
	
	//Save Loan
	@Transactional
	public void saveLoan(Integer userId, String bank, String CBU, Double amount, Double interestRate, File file, Integer numberInstallments) 
			throws LoanNotFoundException {
		
		validate(userId, bank, CBU, amount, interestRate, file, numberInstallments);
		
		User user = userRepository.findById(userId).get();
		Loan loan = new Loan();
		LocalDate today = LocalDate.now();
		LocalDate dueDate = calculateDueDate(today);
		
		
		loan.setUser(user);
		loan.setBank(bank);
		loan.setCBU(CBU);
		loan.setAmount(amount);
		loan.setInterestRate(interestRate);
		loan.setStartDate(today);
		loan.setDueDate(dueDate);
		loan.setStatus(true);
		loan.setFile(file);
		
		loanRepository.save(loan);
	}

	//List 
	public List<Loan> getLoans() {
		return loanRepository.findAll();
	}
	
	//DeactivateLoan
	public void deactivateLoan(Integer id) {
		
		Optional<Loan> answer= loanRepository.findById(id);
		
		if (answer.isPresent()) {
			Loan loan = answer.get();
			
			loan.setStatus(false);
			
			loanRepository.save(loan);
		}
	}
	
	//Calculate due date
	private static LocalDate calculateDueDate(LocalDate today) {
		
		//Get current month
		int currentMonth = today.getMonthValue();
		int nextMonth = currentMonth + 1;
		
		//Get current year or next year
		int currentYear = today.getYear();
		int year = currentYear;
		if(nextMonth ==13) {
			nextMonth = 1;
			year++;
		}
		
		//Create due date
		LocalDate dueDate = LocalDate.of(year, nextMonth, 10);
		return dueDate;
	}
	
	//Validate
	private void validate (Integer userId, String bank, String CBU, Double amount, Double interestRate, File file, Integer numberInstallments) {
		if(userId == null) {
			throw new LoanNotFoundException ("El id de usuario no puede ser nulo");
		}
		
		if(bank.isEmpty() || bank == null) {
			throw new LoanNotFoundException ("El banco no puede ser nulo o estar vacío");
		}
		
		if(CBU.isEmpty() || CBU == null) {
			throw new LoanNotFoundException ("El CBU no puede ser nulo o estar vacío");
		}
		
		if(amount == null) {
			throw new LoanNotFoundException ("El monto no puede ser nulo");
		}
		
		if(interestRate == null) {
			throw new LoanNotFoundException ("La tasa de interes no puede ser nula");
		}
		if(file == null) {
			throw new LoanNotFoundException ("El documento no puede ser nulo");
		}
		if(numberInstallments == null) {
			throw new LoanNotFoundException ("El numero de cuotas no puede ser nulo");
		}
	}
	

}
