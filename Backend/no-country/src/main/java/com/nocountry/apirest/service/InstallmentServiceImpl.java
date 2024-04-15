package com.nocountry.apirest.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.apirest.exception.InstallmentNotFoundException;
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
	public void saveInstallment(Integer loanId, Double installmentAmount, LocalDate today, Integer installmentNumber) {
		
		Installment installment = new Installment();
		Loan loan = loanRepository.findById(loanId).get();
		
	    LocalDate dueDate = calculateDueDate(today, installmentNumber);
	    
		installment.setLoan(loan);
		installment.setAmount(installmentAmount);
		installment.setDueDate(dueDate);
		installment.setInstallmentNumber(installmentNumber);
		installment.setStatus(true);
		
		installmentRepository.save(installment);
		
	}
	
	//Calculate dueDate date
	private static LocalDate calculateDueDate(LocalDate today, Integer installmentNumber) {
			LocalDate dueDate = today.plusMonths(installmentNumber).withDayOfMonth(10);
		    return dueDate;
	}
	
	//List
	public List<Installment> getInstallments(){
		return installmentRepository.findAll();
	}
	
	//Deactivate Installment
	@Transactional
	public void deactivateInstallment(int id) {
		
			Optional<Installment> answer= installmentRepository.findById(id);
		
			if (answer.isPresent()) {
				Installment installment = answer.get();
			
				installment.setStatus(false);
			
				installmentRepository.save(installment);
			}
	}
	
	//Get Installment By Id
	@Transactional
	public Installment getInstallmentById(Integer id) throws InstallmentNotFoundException {
		
		Optional<Installment> optionalInstallment = installmentRepository.findById(id);
		
		if (optionalInstallment.isPresent()) {
			return optionalInstallment.get();
		}else {
			throw new InstallmentNotFoundException("Installment no encontrado con el id: " + id);
		}
		
	}
	
	
}
