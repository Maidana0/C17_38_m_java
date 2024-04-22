package com.nocountry.apirest.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.apirest.exception.InvalidLoanException;
import com.nocountry.apirest.model.Installment;
import com.nocountry.apirest.model.Investment;
import com.nocountry.apirest.model.Loan;
import com.nocountry.apirest.repository.ILoanRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LoanServiceImpl implements ILoanService {
	
	private ILoanRepository loanRepository;
	
	
	@Override
	public Loan saveLoan(Loan loan) throws InvalidLoanException {
		Loan newLoan = loan;
		
		LocalDate today = LocalDate.now();
		LocalDate dueDate = calculateDueDate(today);
		
		newLoan.setStartDate(today);
		newLoan.setDueDate(dueDate);
		
		
		//int loanId = newLoan.getId();
		//double installmentAmount = newLoan.getAmount()/newLoan.getNumberOfInstallments();
		//.setInstallmentAmount(installmentAmount);
		//List<Installment> installments = createInstallments(loanId, newLoan.getNumberOfInstallments(), installmentAmount, today);
		//newLoan.setInstallments(installments);
		Loan newloan=loanRepository.save(newLoan);
		return newloan;
	}

	//Create installment
	@Transactional
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
	public List<Loan> getLoan() {
		return loanRepository.findAll();
	}

	//Find Loan
	public Loan findLoan(int id) throws InvalidLoanException {
		
		Loan loan = loanRepository.findById(id).orElseThrow(()-> new InvalidLoanException("No se encontro el prestamo " + id));
		return loan;
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
}
