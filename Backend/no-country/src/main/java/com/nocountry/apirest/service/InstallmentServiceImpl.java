package com.nocountry.apirest.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.apirest.model.Installment;
import com.nocountry.apirest.model.Loan;
import com.nocountry.apirest.repository.IInstallmentRepository;
import com.nocountry.apirest.repository.ILoanRepository;

import jakarta.transaction.Transactional;

@Service
public class InstallmentServiceImpl implements IInstallmentService{

	private IInstallmentRepository installmentRepository;
	private ILoanRepository loanRepository;
	
	//Save Installment
	@Transactional
	public void saveInstallment(Integer loanId, Double installmentAmount, LocalDate today) {
		
		Installment installment = new Installment();
		Loan loan = loanRepository.findById(loanId).get();
		
		LocalDate paymentDate = calculatePaymentDate(today);
	    LocalDate dueDate = calculateDueDate(paymentDate);
	    
		installment.setLoan(loan);
		installment.setAmount(installmentAmount);
		installment.setPaymentDate(paymentDate);
		installment.setDueDate(dueDate);
		installment.setStatus(true);
		
		installmentRepository.save(installment);
		
	}
	
	//Calculate payment date
		private static LocalDate calculatePaymentDate(LocalDate today) {
			
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
		
		//Calculate due date
		private static LocalDate calculateDueDate(LocalDate paymentDay) {
			
			//Get current month
			int currentMonth = paymentDay.getMonthValue();
			int nextMonth = currentMonth + 1;
			
			//Get current year or next year
			int currentYear = paymentDay.getYear();
			int year = currentYear;
			if(nextMonth ==13) {
				nextMonth = 1;
				year++;
			}
			
			//Create due date
			LocalDate dueDate = LocalDate.of(year, nextMonth, 10);
			return dueDate;
		}
	
	//List
	public List<Installment> getInstallments(){
		return installmentRepository.findAll();
	}
	
	//Deactivate Installment
	public void deactivateInstallment(int id) {
		
			Optional<Installment> answer= installmentRepository.findById(id);
		
			if (answer.isPresent()) {
				Installment installment = answer.get();
			
				installment.setStatus(false);
			
				installmentRepository.save(installment);
			}
	}
	
	
}
