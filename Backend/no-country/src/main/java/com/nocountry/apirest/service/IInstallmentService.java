package com.nocountry.apirest.service;

import java.time.LocalDate;
import java.util.List;

import com.nocountry.apirest.model.Installment;

public interface IInstallmentService {
	
	public void saveInstallment(Integer loanId, Double installmentAmount, LocalDate today);
	public List<Installment> getInstallments();
	public void deactivateInstallment(int id);
	

}
