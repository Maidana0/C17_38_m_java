package com.nocountry.apirest.service;

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
	public void saveInstallment(Integer loanId, Double installmentAmount) {
		
		Loan loan = loanRepository.findById(loanId).get();
		Installment installment = new Installment();
		
		installment.setLoan(loan);
		installment.setAmount(installmentAmount);
		installment.setPaymentDate(null);
		installment.setDueDate(null);
		installment.setStatus(true);
		
		installmentRepository.save(installment);
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
