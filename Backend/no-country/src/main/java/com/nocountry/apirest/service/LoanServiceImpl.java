package com.nocountry.apirest.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.apirest.exception.LoanNotFoundException;
import com.nocountry.apirest.model.File;
import com.nocountry.apirest.model.Installment;
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

	@Autowired
	private final EmailService emailService;

	public LoanServiceImpl(EmailService emailService) {
		this.emailService = emailService;
	}

	//Save Loan
	@Transactional
	public void saveLoan(Integer userId, String bank, String CBU, Double amount, Double interestRate, File file, Integer numberOfInstallments, Double installmentAmount) 
			throws LoanNotFoundException {
		
		validate(userId, bank, CBU, amount, interestRate, file, numberOfInstallments, installmentAmount);
		
		User user = userRepository.findById(userId).get();
		Loan loan = new Loan();
		int loanId = loan.getId();
		LocalDate today = LocalDate.now();
		LocalDate dueDate = calculateDueDate(today);
		List<Installment> installments = createInstallments(loanId, numberOfInstallments, installmentAmount, today);
		
		loan.setUser(user);
		loan.setBank(bank);
		loan.setCBU(CBU);
		loan.setAmount(amount);
		loan.setInterestRate(interestRate);
		loan.setStartDate(today);
		loan.setDueDate(dueDate);
		loan.setStatus(true);
		loan.setFile(file);
		loan.setInstallmentAmount(installmentAmount);
		loan.setInstallments(installments);
		
		loanRepository.save(loan);

		emailService.sendSimpleMailMessage(loan.getUser().getName(), loan.getUser().getSurname(), loan.getUser().getEmail());

	}
	
	//Create installment
	private List<Installment> createInstallments(Integer loanId, Integer numberOfInstallments, Double installmentAmount, LocalDate today){
		
		InstallmentServiceImpl installmentService = new InstallmentServiceImpl();
		
		List<Installment> installments = new ArrayList<>();
		
		for(int i = 0; i<numberOfInstallments; i++) {
			
			//Create new Installment
			Installment installment = new Installment();
			
			//Calculate Installment number
			int installmentNumber = i+1;
			
			//Save Installment
			installmentService.saveInstallment(loanId, installmentAmount, today, installmentNumber);
			
			//Add Installment to list
			installments.add(installment);
			
		}
		
		return installments;
		
	}

	//List 
	public List<Loan> getLoans() {
		return loanRepository.findAll();
	}
	
	//Deactivate Loan
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
	private void validate (Integer userId, String bank, String CBU, Double amount, Double interestRate, File file, Integer numberInstallments, Double installmentAmount) {
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
		if(installmentAmount == null) {
			throw new LoanNotFoundException ("El valor de las cuotas no puede ser nulo");
		}
	}
	

}
